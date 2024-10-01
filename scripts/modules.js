import aCourse from "./Course.mjs";

//Realiza llamado al init del js Course
aCourse.init();

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});
