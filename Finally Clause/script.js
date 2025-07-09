const f = () => {
  try {
    
    let a = 0;
    console.log(pagal); // ❌ Error hoga yahan
    console.log("isme koi galti nhi hai");
    return
  }
  catch (error) {
    console.log("This is an error");
    console.log(e); 
  }
  finally {
    console.log("Finally will run in all the cases .");
  }

  console.log("Radhe");
}
f();
