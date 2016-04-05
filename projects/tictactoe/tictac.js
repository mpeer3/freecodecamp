(function () {
    var app = angular.module("tictac", []);
    app.controller("contr_tictac", function ($scope) {
        $scope.init = [["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]];
        $scope.board = $scope.init;
        $scope.nextmoves = [];
        $scope.mvcnt = 0;
        $scope.switchpos = "switch1.png";
        $scope.player = "X";
        $scope.pc = "O";
        $scope.lock = false;
        $scope.cheat = false;
        $scope.allcombi = [
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]]

        ];
        $scope.trigger_cheat = function () {
            if ($scope.cheat) {
                $scope.cheat = false;
            } else {
                $scope.cheat = true;
            }
        }
        $scope.sw_click = function () {
            if (!$scope.lock) {
                if ($scope.switchpos == "switch1.png") {
                    $scope.switchpos = "switch2.png";
                    $scope.player = "O";
                    $scope.pc = "X";
                } else {
                    $scope.switchpos = "switch1.png";
                    $scope.player = "X";
                    $scope.pc = "O";
                }
            }
        }
        $scope.eval_line = function (board, sw, c1, c2, c3) {
            if (!sw) {
                var pl2 = $scope.pc;
                var pl1 = $scope.player;
            } else {
                var pl1 = $scope.pc;
                var pl2 = $scope.player;
            }
            var score = 0;
            var y = c1[1];
            var x = c1[0];
            if (board[y][x] === pl2) {
                score = 1;
            } else if (board[y][x] === pl1) {
                score = -1;
            }
            y = c2[1];
            x = c2[0];
            if (board[y][x] === pl2) {
                if (score == 1) {
                    score = 10;
                } else if (score == -1) {
                    return 0;
                } else { 
                    score = 1;
                }
            } else if (board[y][x] === pl1) {
                if (score == -1) {
                    score = -10; 
                } else if (score == 1) {
                    return 0;
                } else { 
                    score = -1;
                }
            }
            y = c3[1];
            x = c3[0];
            if (board[y][x] === pl2) {
                if (score > 0) {
                    score = score * 10;
                } else if (score < 0) {
                    return 0;
                } else {
                    score = 1;
                }
            } else if (board[y][x] === pl1) {
                if (score < 0) {
                    score = score * 10;
                } else if (score > 1) {
                    return 0;
                } else {
                    score = -1;
                }
            }
            return score;
        }
        $scope.eval_all = function (board, sw) {
            var total = 0;
            for (var ct = 0; ct < 8; ct++) {
                var curr = $scope.allcombi[ct];
                total += $scope.eval_line(board, sw, curr[0], curr[1], curr[2]);
            }
            return total;
        }

        $scope.getnextmoves = function (board) {
            var nextmoves = [];
            if ($scope.checkwin($scope.player) || $scope.checkwin($scope.pc)) {

                return nextmoves;

            } else {

                for (var y = 0; y < 3; y++) {
                    for (var x = 0; x < 3; x++) {
                        if (board[y][x] === "-") {
                            nextmoves.push([x, y]);
                        }
                    }
                }
            }
            return nextmoves;
        }
        $scope.checkwin = function (player) {
            var haswon = false;
            for (var ct = 0; ct < 8; ct++) {
                var curr = $scope.allcombi[ct]
                var x1 = curr[0][0];
                var y1 = curr[0][1];
                var x2 = curr[1][0];
                var y2 = curr[1][1];
                var x3 = curr[2][0];
                var y3 = curr[2][1];
                if ($scope.board[y1][x1] == player && $scope.board[y2][x2] == player && $scope.board[y3][x3] == player) {

                    haswon = true;
                }
            }
            return haswon;
        }
        $scope.minmax = function (board, level, player, x, y) {
            //build list of valid moves
            if (player == $scope.pc) {
                var best_score = Number.MAX_VALUE * -1;
            } else {
                var best_score = Number.MAX_VALUE;
            }
            var x_opt = -1;
            var y_opt = -1;
            var curr_score = 0;
            var nextmoves = $scope.getnextmoves(board);
            if (level == 0 || nextmoves.length == 0) {
                best_score = $scope.eval_all(board, false);
                x_opt = x;
                y_opt = y;
            } else {
                for (var ct = 0; ct < nextmoves.length; ct++) {
                    var curr = nextmoves[ct];
                    var y = curr[1];
                    var x = curr[0];
                    board[y][x] = player;
                    if (player == $scope.pc) {
                        curr_score = $scope.minmax(board, level - 1, $scope.player)[0];
                        if (curr_score > best_score) {
                            best_score = curr_score;
                            x_opt = x;
                            y_opt = y;

                        }
                    } else {
                        curr_score = $scope.minmax(board, level - 1, "O")[0];
                        if (curr_score < best_score) {
                            best_score = curr_score;
                            x_opt = x;
                            y_opt = y;

                        }

                    }

                    board[y][x] = "-";
                }

            }
            var res = [best_score, x_opt, y_opt];
            return res;
        }

        $scope.reset = function () {
            $scope.board = $scope.init;
            $scope.mvcnt = 0;
            $scope.lock = false;
            $scope.switchpos = "switch1.png";
            $scope.player = "X";
            $scope.pc = "O";
        }
        $scope.testwin = function () {
            if ($scope.checkwin($scope.player)) {
                alert("You Win!");
                $scope.reset();
                location.reload();
                // return true;
            }
            if ($scope.checkwin($scope.pc)) {
                alert("I Win!");
                $scope.reset();
                location.reload();
                //return true;
            }
            return false;
        }
        $scope.getrand = function (board) {
            var moves = $scope.getnextmoves(board);
            var mx = moves.length;
            var rand = Math.floor(Math.random() * mx);
            return moves[rand];

        }
        $scope.setcell = function (x, y) {
            $scope.lock = true;
            if ($scope.board[y][x] == "-") {
                $scope.board[y][x] = $scope.player;
                $scope.mvcnt++;
                $scope.testwin();
                if ($scope.mvcnt <= 8)
                {
                    var coord = [];
                    var x = 0;
                    var y = 0;
                    if ($scope.cheat) {
                        coord = $scope.getrand($scope.board);
                        x = coord[0];
                        y = coord[1];
                    } else {
                        coord = $scope.minmax($scope.board, 2, $scope.pc, 0, 0);
                        x = coord[1];
                        y = coord[2];
                    }

                    $scope.board[y][x] = $scope.pc;
                    $scope.mvcnt++;
                    $scope.testwin();
                }
                else {
                    alert("0:0!");
                    location.reload();
                }
            }

        }
    });
})();