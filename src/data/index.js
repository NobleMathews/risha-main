// key identifies file name for image and is used in every href
// value 
export const value=["Assistant Professor","Ph.D. Student","M.S. Student","M.Tech. Student","B.Tech. Student"] 
export const members = [
  {
    key: 'sridhar',
    value: 0,
    email:'ch@iittp.ac.in',
    title: 'Sridhar Chimalakonda',
    desc: '',
    links:'' 
  },
  {
    key: 'akhila',
    value: 1,
    email:'cs19d504@iittp.ac.in',
    title: 'Venigalla Akhila Sri Manasa',
    desc: '',
    links:'' 
  },
  {
    key: 'eashan',
    value: 2,
    email:'cs19s501@iittp.ac.in',
    title: 'A Eashaan Rao',
    desc: '',
    links:'' 
  },
  {
    key: 'shriram',
    value: 2,
    email:'cs20s503@iittp.ac.in',
    title: 'Shriram Shridhar Shanbhag',
    desc: '',
    links:'' 
  },
  {
    key: 'satish',
    value: 2,
    email:'cs20s502@iittp.ac.in',
    title: 'Satish Shetty',
    desc: '',
    links:'' 
  },
  {
    key: 'dheeraj',
    value: 4,
    email:'cs17b028@iittp.ac.in',
    title: 'Dheeraj Vagavolu',
    desc: '',
    links:'' 
  },
  {
    key: 'kowndinya',
    value: 4,
    email:'cs17b032@iittp.ac.in',
    title: 'Kowndinya Boyalakuntla',
    desc: '',
    links:'' 
  },
  {
    key: 'karthik',
    value: 4,
    email:'cs17b026@iittp.ac.in',
    title: 'Karthik Chandra',
    desc: '',
    links:'' 
  },
  {
    key: 'mahendran',
    value: 3,
    email:'cs19m008@iittp.ac.in',
    title: 'Mahendran N',
    desc: '',
    links:'' 
  },
  {
    key: 'rishitha',
    value: 4,
    email:'cs17b014@iittp.ac.in',
    title: 'K Rishitha ',
    desc: '',
    links:'' 
  },
  {
    key: 'aparna',
    value: 4,
    email:'cs17b005@iittp.ac.in',
    title: 'Aparna Vadlamani',
    desc: '',
    links:'' 
  },
  {
    key: 'ashutosh',
    value: 4,
    email:'cs17b007@iittp.ac.in',
    title: 'Ashutosh Rajput',
    desc: '',
    links:'' 
  },
  {
    key: 'nakshatra',
    value: 4,
    email:'cs17b020@iittp.ac.in',
    title: 'Nakshatra Gupta',
    desc: '',
    links:'' 
  },
  {
    key: 'deep',
    value: 4,
    email:'cs17b011@iittp.ac.in',
    title: 'Deep Ghadiyali',
    desc: '',
    links:'' 
  },
  {
    key: 'abhishek',
    value: 4,
    email:'cs17b002@iittp.ac.in',
    title: 'Abhishek Kumar',
    desc: '',
    links:'' 
  },
  {
    key: 'tejasva',
    value: 4,
    email:'cs17b027@iittp.ac.in',
    title: 'Tejasva Motsara',
    desc: '',
    links:'' 
  },
  {
    key: 'shruti',
    value: 4,
    email:'cs18b043@iittp.ac.in',
    title: 'Shruti Priya',
    desc: '',
    links:'' 
  },
  {
    key: 'shubhankar',
    value: 4,
    email:'cs18b034@iittp.ac.in',
    title: 'Shubhankar Bhadra',
    desc: '',
    links:'' 
  },

  {
    key: 'noble',
    value: 4,
    email:'ch19b023@iittp.ac.in',
    title: 'Noble Saji Mathews',
    desc: '',
    links:`
    Research Gate [https://www.researchgate.net/profile/Noble_Mathews]
    Github [https://github.com/NobleMathews]
    `
  },
].sort((a,b) => a.value-b.value);
export const alumini = [
  {
    key: 'akash',
    value: 4,
    email:'tee15b007@iittp.ac.in',
    title: 'Akash Dhasade',
    desc: '', 
    links:''
  },
  {
    key: 'saket',
    value: 4,
    email:'tce15b020@iittp.ac.in',
    title: 'Saket Dattatreya Joshi', 
    desc: '', 
    links:''
  },
  {
    key: 'vartika',
    value: 3,
    email:'cs18m016@iittp.ac.in',
    title: 'Vartika Agrahari',
    desc: 'Currently working in AI Sociales`' 
  },
  {
    key: 'vaishali',
    value: 4,
    email:'cs16b015@iittp.ac.in',
    title: 'Vaishali Kamal Khanve', 
    desc: '', 
    links:''  
  },
  {
    key: 'vishal',
    value: 4,
    email:'cs16b033@iittp.ac.in',
    title: 'Vishal Mishra',
    desc: '', 
    links:''   
  },
  {
    key: 'shubham',
    value: 4,
    email:'cs16b026@iittp.ac.in',
    title: 'Sangle Shubham Rajendra',
    desc: '', 
    links:''  
     
  },
  {
    key: 'saran',
    value: 4,
    email:'cs16b013@iittp.ac.in',
    title: 'K Saran Teja Reddy',
    desc: '', 
    links:''
       
  },
  {
    key: 'sandeep',
    value: 4,
    email:'cs16b017@iittp.ac.in',
    title: 'Sandeep Muvva',
    desc: '', 
    links:'' 
      
  }
].sort((a,b) => a.value-b.value);
export const collaborators = [

]

export const sponsors = [
  {
  src:"waterloo.jpg",
  redirect:"",
  title:"University of Waterloo",
  },
  {
  src:"bosch.png",
  redirect:"",
  title:"Bosch",
  },
  {
  src:"codechef.png",
  redirect:"",
  title:"Codechef",
  },
]

export const authors = members.concat(alumini,collaborators);