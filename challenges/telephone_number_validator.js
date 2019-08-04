//By Michael Peer 2019

function telephoneCheck(str) {
  //555-555-5555
  let regex1=/^1?\s?[0-9]{3}-[0-9]{3}-[0-9]{4}/
  //(555)555-5555
  let regex2=/^1?\s?\([0-9]{3}\)[0-9]{3}-[0-9]{4}/
  //(555) 555-5555
  let regex3=/^1?\s?\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/
  //555 555 5555
   let regex4=/^1?\s?[0-9]{3}\s[0-9]{3}\s[0-9]{4}/
  //5555555555
  let regex5=/^1?\s?[0-9]{10}$/

  return regex1.test(str) || regex2.test(str) || regex3.test(str) ||regex4.test(str) || regex5.test(str)
  
}

telephoneCheck("555-555-5555");
