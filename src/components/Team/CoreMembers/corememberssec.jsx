import SideNav from '../../utils/Header/Headers';
import CoreMemberCard from './coremembers/coremembercard';

import styles from './corememberssec.module.css';

// import corememberslist  from './corememberslist.json';

const corememberslist=[
	{
		"S.No.": "1",
		"Name": "MD Uruj Akbar Rahman",
		"Branch": "",
		"Domain": "Sponsorship"
	},
{
		"S.No.": "2",
		"Name": "Shruti Chauhan",
		"Branch": "",
		"Domain": "Sponsorship"
	},
{
		"S.No.": "3",
		"Name": "Mukund Maheshwari",
		"Branch": "",
		"Domain": "Sponsorship"
	},
{
		"S.No.": "4",
		"Name": "Amrita Mishra",
		"Branch": "",
		"Domain": "Sponsorship"
	},

{
		"S.No.": "5",
		"Name": "Lakshya Raj",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "6",
		"Name": " Pragya Dave",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "7",
		"Name": " Siddharth Billaiya",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "8",
		"Name": " Bhavya Jain",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "9",
		"Name": " Harsh Jangir",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "10",
		"Name": " Pranav Kumar Singh",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "11",
		"Name": " Meghna Sahu",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "12",
		"Name": " Tulika Dutta",
		"Branch": "",
		"Domain": "Public Relation"
	},
{
		"S.No.": "13",
		"Name": " Amitabh Shukla",
		"Branch": "",
		"Domain": "Public Relation"
	},

{
		"S.No.": "14",
		"Name": "Md Sai Krishna",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "15",
		"Name": " Gaurav Mishra",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "16",
		"Name": " Deepali Paswan",
		"Branch": "Mech",
		"Domain": "Event Management"
	},
{
		"S.No.": "17",
		"Name": " Juhi Dwivedi",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "18",
		"Name": " Tarun Singh",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "19",
		"Name": " Yasmeen Mahilang",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "20",
		"Name": " Akash Soni",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "21",
		"Name": " Anjali Rege",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "22",
		"Name": " Shreyansh Patel",
		"Branch": "",
		"Domain": "Event Management"
	},
{
		"S.No.": "23",
		"Name": " Aqsa Khan ",
		"Branch": "",
		"Domain": "Event Management"
	},

{
		"S.No.": "24",
		"Name": "Vaidik Pandey",
		"Branch": "",
		"Domain": "Vigyaan"
	},
{
		"S.No.": "25",
		"Name": " Neha Kariya",
		"Branch": "",
		"Domain": "Vigyaan"
	},
{
		"S.No.": "26",
		"Name": " Sachin Saini",
		"Branch": "",
		"Domain": "Vigyaan"
	},
{
		"S.No.": "27",
		"Name": " Aadarsh Saurav",
		"Branch": "",
		"Domain": "Vigyaan"
	},
{
		"S.No.": "28",
		"Name": " Priyanka Kilaparthi ",
		"Branch": "",
		"Domain": "Vigyaan"
	},
{
		"S.No.": "29",
		"Name": " Somya Kabra",
		"Branch": "",
		"Domain": "Vigyaan"
	},
{
		"S.No.": "30",
		"Name": "Shaili Mishra",
		"Branch": "ECE",
		"Domain": "Documentation"
	},
{
		"S.No.": "31",
		"Name": "Chitransh Jawere",
		"Branch": "ECE",
		"Domain": "Documentation"
	},
{
		"S.No.": "32",
		"Name": "Shrushti Kapse",
		"Branch": "",
		"Domain": "Design"
	},
{
		"S.No.": "33",
		"Name": " Devesh Kumar Pandey",
		"Branch": "",
		"Domain": "Design"
	},
{
		"S.No.": "34",
		"Name": " Amit Kumar Dansena ",
		"Branch": "",
		"Domain": "Design"
	},
{
		"S.No.": "35",
		"Name": "Govind Purty",
		"Branch": "",
		"Domain": "Design"
	},
{
		"S.No.": "36",
		"Name": "Nikhil Dewangan",
		"Branch": "",
		"Domain": "Design"
	},
{
		"S.No.": "37",
		"Name": "Durgesh Sahu",
		"Branch": "",
		"Domain": "Design"
	},
{
		"S.No.": "38",
		"Name": "Vibhuti Chandrakar",
		"Branch": "",
		"Domain": "Tech"
	},
{
		"S.No.": "39",
		"Name": " Piyush Kumar",
		"Branch": "",
		"Domain": "Tech"
	},
{
		"S.No.": "40",
		"Name": "Aniket Kumar",
		"Branch": "",
		"Domain": "Tech"
	},
{
		"S.No.": "41",
		"Name": "Ankit Lakara",
		"Branch": "",
		"Domain": "Tech"
	}
			]

const CoreMemberSec = () => {
	const compareDomain = (memberFirst, memberSecond) => {
		if (memberFirst.Domain.toLowerCase() < memberSecond.Domain.toLowerCase()) {
			return -1;
		}
		if (memberFirst.Domain.toLowerCase() > memberSecond.Domain.toLowerCase()) {
			return 1;
		}
		return 0;
	};

	return (
		<div className={styles.coresec}>
			<SideNav name='Core Members' />
			<div className={styles.corecontainer}>
				{corememberslist.sort(compareDomain).map((core, index) => (
					<CoreMemberCard key={index} name={core.Name} domain={core.Domain} />
				))}
			</div>
		</div>
	);
};

export default CoreMemberSec;
