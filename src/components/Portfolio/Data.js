import digitalResume from "../pictures/digitalResume.jpeg";
import countDownSystem from "../pictures/countDownSystem.jpeg";
import contactWebsite from "../pictures/contactWebsite.jpeg";
import myPortfolio from "../pictures/myPortfolio.jpeg";
import simulatingPicture from "../pictures/simulatingPicture.jpeg";
import liveStreaming from "../pictures/liveStreaming.jpeg";

const data = [
{
    hebrew_name:"מערכת ניהול לספירה יורדת",
    english_name:"Count Down System", 
    picture: countDownSystem,
    hebrew_descrition:"פיתוח אפליקציית אינטרנט מקומית בזמן אמת עבור ארגון ביטחוני. מטרת המערכת הינה לתכנן ולפקח אחר הליך ביטחוני מסווג.",
    english_description:"Developing a real-time local web application for a security organization. Its purpose is to plan and monitor a classified security procedure.",
    frontend:"ReactJS, React-Redux, JavaScrpit, CSS, HTML.",
    backend:"NodeJS, ExpressJS, Socket.io, MongoDB.",
    git:"https://github.com/sharonNissanov/CountDownSystem",
    message:"whatsapp://send?text=Hi Sharon, I would like to contact you regarding your 'Count Down System' project.  &phone=+972525496864",
    hebrew_message:"whatsapp://send?text= היי שרון, אשמח לדבר איתך בנוגע לפרויקט 'מערכת ניהול לספירה יורדת'.  &phone=+972525496864"
},
{
    hebrew_name:"אתר ליצירת קשר",
    english_name:"Contact Website",
    picture: contactWebsite, 
    hebrew_descrition:"פיתוח האתר הרספונסיבי הראשון שלי, שמטרתו להציג את הכישורים שלי, להוריד את קורות החיים שלי וליצור איתי קשר. כל הנתונים מוצגים באנגלית ובעברית.",
    english_description:"Developing my first responsive website, which meant to show my skills, download my resume and for contacting me. All the data presents both in English and Hebrew. ",
    frontend:"ReactJS, Semantic-UI, CSS, HTML.",
    backend:"Firebase.",
    git:"https://github.com/sharonNissanov/My-Portfolio",
    link:"https://porfolio-d170d.web.app/",
    message:"whatsapp://send?text=Hi Sharon, I would like to contact you regarding your 'Contact Website' project.  &phone=+972525496864",
    hebrew_message:"whatsapp://send?text= היי שרון, אשמח לדבר איתך בנוגע לפרויקט 'אתר ליצירת קשר'.  &phone=+972525496864"
},
{
    hebrew_name:"תיק העבודות שלי",
    english_name:"My Portfolio",
    hebrew_descrition:"פיתוח האתר הרספונסיבי השני שלי שמציג קצת עלי, על כישורי ופרוייקטים שפיתחתי. בנוסף, קורות החיים שלי מוצגים באתר וניתן להורידם. כל הנתונים מוצגים באנגלית ובעברית.",
    english_description:"Developing my second responsive website which displays a bit about me, my skills, my work and my resume and also download it. All the data presents both in English and Hebrew. ",
    picture: myPortfolio, 
    frontend:"ReactJS, Semantic-UI, Material-UI, CSS, HTML.",
    backend:"Firebase.",
    message:"whatsapp://send?text=Hi Sharon, I would like to contact you regarding your 'My Portfolio' project.  &phone=+972525496864",
    hebrew_message:"whatsapp://send?text= היי שרון, אשמח לדבר איתך בנוגע לפרויקט 'תיק העבודות שלי'.  &phone=+972525496864"
},
{
    hebrew_name:"קורות חיים דיגיטלים",
    english_name:"Digital Resume", 
    picture: digitalResume,
    hebrew_descrition:"פיתוח אתר רספונסיבי לסטודנט שנה רביעית להנדסת חשמל ואלקטרוניקה המציג את כישוריו ואת קורות החיים שלו בעברית ובאנגלית ומאפשר ליצור איתו קשר באמצעות דואר, קישור וטלפון. המטרה העיקרית של אתר זה הייתה להנגיש את קורות חייו בתהליך חיפוש העבודה.",
    english_description:"Developing a responsive website for a fourth year student for Electrical & Electronics Engineering which displays his skills and his resume in Hebrew and English and allows contacting him via mail, linkedin and phone. The main goal of this website was to make his resume accessible in the job search process. ",
    frontend:"ReactJS, Semantic-UI, CSS, HTML.",
    backend:"Firebase.",
    git:"https://github.com/sharonNissanov/Student-Resume--Gal-" ,
    link:"https://gal-wainberg.com/",
    message:"whatsapp://send?text=Hi Sharon, I would like to contact you regarding your digital resume project.  &phone=+972525496864",
    hebrew_message:"whatsapp://send?text= היי שרון, אשמח לדבר איתך בנוגע לפרויקט 'קורות חיים דיגיטלים'.  &phone=+972525496864"
},
{
    hebrew_name:"דימוי תמונה",
    english_name:"Simulate an image", 
    picture: simulatingPicture,
    frontend:"ReactJS, Material-UI, CSS, HTML.",
    hebrew_descrition:"  התבקשתי לדמות תמונה ספציפית באמצעות שימוש בספריית העיצוב- Material-UI.",
    english_description:"Task from home assignment: I was asked to simulate a specific image by using Material-UI framework",
    git:"https://github.com/sharonNissanov/Simulate-an-image-MaterialUI",
    message:"whatsapp://send?text=Hi Sharon, I would like to contact you regarding your 'Simulate an image' project.  &phone=+972525496864",
    hebrew_message:"whatsapp://send?text= היי שרון, אשמח לדבר איתך בנוגע לפרויקט 'דימוי תמונה'.  &phone=+972525496864"
},
{
    hebrew_name:"Live Streaming -שידור חי",
    english_name:"Live Streaming", 
    picture: liveStreaming,
    site:"https://www.live-rates.com/rates",
    description1:"Task from home assignment- this app displays data from: " ,
    description2:"and deals with the live streaming aspect and 3 API requests per hour or the hour limitation issue. The data displays in 2 different ways.",
    description_hebrew1:"התבקשתי לפתח אפליקציה המציגה נתונים מהאתר: ",
    description_hebrew2:"ועוסקת בהיבט השידור החי וב-3 בקשות API לשעה או בנושא הגבלת השעה. המידע מוצג בשתי דרכים שונות.",
    frontend:"ReactJS, Semantic-UI, CSS, HTML.",
    git:"https://github.com/sharonNissanov/LIVE-STREAMING",
    message:"whatsapp://send?text=Hi Sharon, I would like to contact you regarding your 'Live Streaming' project.  &phone=+972525496864",
    hebrew_message:"whatsapp://send?text= היי שרון, אשמח לדבר איתך בנוגע לפרויקט 'Live Streaming -שידור חי'.   &phone=+972525496864"
},

]
  export default data;