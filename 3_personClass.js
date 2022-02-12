class person{
  constructor(Name,fatherName,motherName,gender,dob,age,address,contactNo,email,aadharNo) {
  this.Name = Name ;
  this.fatherName = fatherName ;
  this.motherName = motherName;
  this.gender = gender;
  this.dob = dob; 
  this.age = age;
  this.address = address ;
  this.contactNo = contactNo ;
  this.email = email;
  this.aadharNo = aadharNo;
  }
  personName(){
  return `My name is ${this.Name}`;
  }
  personFatherName(){
  return `My father name is ${this.fatherName}`;
  }
  personMotherName(){
  return `My mother name is ${this.motherName}`;
  }
  personGender(){
  return `My gender is ${this.gender}`;
  }
  personDob(){
    return `My Date of Birth is ${this.dob}`;
    }
    personAge(){
    return `My age is ${this.age}`;
    }
    personAddress(){
  return `My address is ${this.address}`;
  }
  personContactNo(){
  return `My contact Number is ${this.contactNo}`;
  }
  personEmail(){
  return `My e-mail ID is ${this.email}`;
  }
  personAadharNo(){
    return `My Aadhaar Number is ${this.aadharNo}`;
    }
}

  let personObj= new person("Thamizhanban","Sivagnanam","Laila",
  "Male","20-01-1999","23","Virugambakkam, Chennai - 600092","9087405536","thamizhanban666@gmail.com","9876543210");
  console.log(personObj.personName());
  console.log(personObj.personFatherName());
  console.log(personObj.personMotherName());
  console.log(personObj.personGender());
  console.log(personObj.personDob());
  console.log(personObj.personAge());
  console.log(personObj.personAddress());
  console.log(personObj.personContactNo());
  console.log(personObj.personEmail());
  console.log(personObj.personAadharNo());
  