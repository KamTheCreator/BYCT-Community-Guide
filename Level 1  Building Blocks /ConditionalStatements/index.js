function determineGrade(score) {
     let grade;
     if (score >= 90) {
         grade = 'A';
     } else if (score >= 80) {
         grade = 'B';
     } else if (score >= 70) {
         grade = 'C';
     } else if (score >= 60) {
         grade = 'D';
     } else {
         grade = 'F';
     }
     console.log(`Score: ${score} - Grade: ${grade}`);
 }
 
 // Example usage:
 determineGrade(95); // Output: Score: 95 - Grade: A
 determineGrade(85); // Output: Score: 85 - Grade: B
 determineGrade(75); // Output: Score: 75 - Grade: C
 determineGrade(65); // Output: Score: 65 - Grade: D
 determineGrade(55); // Output: Score: 55 - Grade: F