"use strict";

/***** Variablen 01 *******/



// console.log("Hello World!");
// console.log(firstName); //nicht deklarierte Var. -->Fehler

// let firstName; // Deklaration/definition
// firstName = "Max";// Wertzuweisung
// console.log(firstName);//Ausgabe

// let familyName ="Mütze"; //Deklaration und Wertzuweisung zusammen
// console.log(familyName);
// console.log(firstName + " " + familyName);

// let firstName,familyName;
// firstName = prompt("Bitte Vorname eingeben:");
// familyName = prompt("Bitte Nachname eingeben:");
// console.log(firstName + " " + familyName);

// let test;
// test = "Hi";
// test = 2;
// test = true;
// console. log("Datentyp:" + typeof test)
// console. log("Inhalt:" + test)

// const test = "hi";
// test = 2;
// console. log("Inhalt:" + test);

let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// let year = 2022;
let date = new Date();
let year = date.getFullYear();
console.log("Date():" + year);

ageJohn = 25;
ageMark = 30;
// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

//Ausgabe

console.log("birthYearJohn:" + birthYearJohn);
console.log("birthYearMark:" + birthYearMark);