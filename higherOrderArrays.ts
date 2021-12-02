interface CompanyArray {
  name: string;
  category: string;
  start: number;
  end: number;
}

const ages: number[] = [
  33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32,
];

const companies: CompanyArray[] = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

//ForEach
// companies.forEach((company) => console.log(company));

//Filter
const retail = companies.filter(
  (companyName) => companyName.category === "retail"
);

//Map
const companyName = companies.map((company) => company.name);

//Sort
const sortDate = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : 0));

//Reduce
const sum = ages.reduce((total, age) => total + age, 0);
