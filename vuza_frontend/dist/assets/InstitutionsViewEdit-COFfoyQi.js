import{r as h,ae as H,a9 as V,b as Z,a as Y,j as e,ak as G,B as _,T as A,af as K,aT as Q,aU as i,m as c,aV as n,ai as o,k as W,ag as T,aW as p,aX as I,aY as z,aZ as L,a_ as X,G as M,e as R,H as B,a$ as J,n as ee,g as ae,d as te}from"./index-BkwLtTZs.js";import{S as se,a as re,b as ne,h as oe,u as ie,d as le}from"./moment-Bh2CcBIg.js";import{C as de}from"./CircularProgress-CnAXhX3U.js";import{M as b}from"./MenuItem-CJmUos5b.js";import{F as O,C as $}from"./FormControlLabel-CjUZIMk8.js";const F=[{label:"Institution Details",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Supporting Documents",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}],ce=({label:s,isdisabled:g,existingFiles:f,...y})=>{const[U,x,t]=J(y),[w,j]=h.useState(!1),D=async l=>{try{j(!0);const a=await ee("/v1/file/get/",{file_path:l});console.log(a),window.open(a.presignedUrl,"_blank","noopener,noreferrer"),j(!1)}catch(a){j(!1),console.error("Error fetching presigned URL:",a)}},r=l=>{t.setValue(l)},{acceptedFiles:k,getRootProps:P,getInputProps:C,isDragActive:v}=ie({onDrop:r}),S=k.map(l=>e.jsxs("li",{children:[l.path," - ",l.size," bytes"]},l.path)),E=f.map(l=>{const[,a]=l.split("/");return e.jsx("a",{children:e.jsx("li",{onClick:()=>D(l),children:a},l)})});return e.jsxs("div",{children:[e.jsxs("aside",{children:[e.jsx("h4",{children:"Existing Files"}),w?"File Loading":e.jsx(e.Fragment,{children:e.jsx("ul",{children:E})}),e.jsx("h4",{children:"New Files"}),e.jsx("ul",{children:S})]}),e.jsxs("div",{...P(),style:{outline:"none"},children:[e.jsx("input",{...C(),multiple:!0}),e.jsxs("div",{style:{border:"2px dashed #ced4da",borderRadius:"8px",padding:"16px",textAlign:"center",cursor:"pointer",background:v?"#f8f9fa":"transparent"},children:[e.jsx(le,{}),e.jsxs(A,{variant:"subtitle1",children:[" ",s]})]})]}),x.error?e.jsx(o,{error:!0,children:e.jsx(n,{name:y.name})}):null]})},pe=1024*1024*10,ue=["application/pdf","image/jpeg","image/png"],me=[T().shape({name:p().required("Organization Name is required"),description:p().nullable(),country:p().nullable(),state:p().nullable(),primary_phone_number:p().nullable(),primary_email_address:p().email("Must be a valid email").nullable(),industry:p().nullable(),contact_person_names:p().nullable(),contact_person_phone_number:p().nullable(),contact_person_email_address:p().email("Must be a valid email").nullable(),application_date:I().required("Application Date is required"),approval_date:I().nullable(),is_approved:z().required("Approval status is required"),is_test:z().required("Test status is required"),organization_type:L().nullable(),approved_by:p().nullable(),created_at:I().nullable(),created_by:p().nullable()}),T().shape({supportingDocuments:X().of(L().test("fileSize","File is too large",s=>(console.log(s),s?s.size<=pe:!0)).test("fileFormat","Unsupported Format",s=>s?ue.includes(s.type):!0))})],he=({isdisabled:s,existingFiles:g})=>e.jsx(e.Fragment,{children:e.jsx(M,{container:!0,spacing:2,children:e.jsxs(M,{item:!0,xs:12,children:[e.jsx(ce,{name:"supportingDocuments",existingFiles:g,label:"Upload Contractual Documents",isdisabled:s}),e.jsx(A,{children:"e.g) Contracts, MoU etc "})]})})}),q=s=>oe(s).format("YYYY-MM-DD HH:mm:ss");function fe(){const[s,g]=h.useState(0),[f,y]=h.useState(new Set),[U,x]=h.useState(!1),[t,w]=h.useState(),{pathname:j}=H(),{guid:D=""}=V(),r=j.includes("edit");console.log(r);const[k,P]=h.useState({name:"",description:"",country:"",state:"",primary_phone_number:"",primary_email_address:"",industry:"",contact_person_names:"",contact_person_phone_number:"",contact_person_email_address:"",application_date:"",approval_date:"",is_approved:!1,is_test:!1,approved_by:"",supportingDocuments:[],created_at:"",created_by:""});Z("get_organization",()=>ae(`/v1/organizations/by_guid/${D}/`),{refetchOnWindowFocus:!1,onSuccess:a=>w(a.data[0])}),h.useEffect(()=>{t&&P({name:t.name||"",description:t.description||"",country:t.country||"",state:t.state||"",primary_phone_number:t.primary_phone_number||"",primary_email_address:t.primary_email_address||"",industry:t.industry||"",contact_person_names:t.contact_person_names||"",contact_person_phone_number:t.contact_person_phone_number||"",contact_person_email_address:t.contact_person_email_address||"",application_date:q(t.application_date)||"",approval_date:q(t.approval_date)||"",is_approved:t.is_approved||!1,is_test:t.is_test||!1,approved_by:t.approved_by||"",supportingDocuments:t.supportingDocuments||[],created_at:t.created_at||"",created_by:t.created_by||""})},[t]);const C=Y(a=>te(`/v1/organizations/update/${t.guid}/`,a)),v=a=>f.has(a),S=()=>{let a=f;v(s)&&(a=new Set(a.values()),a.delete(s)),g(u=>u+1),y(a)},E=()=>{g(a=>a-1)},l=(a,u)=>{if(console.log("submitting"),s===F.length-1){if(r){x(!0),console.log(a);const m=new FormData;for(let d in a)d==="supportingDocuments"?(console.log(a.supportingDocuments),a.supportingDocuments.forEach(N=>{console.log("here"),m.append("files",N)}),console.log(m)):m.append(d,a[d]);setTimeout(()=>{C.mutate(m,{onSuccess:d=>{R.success("Update & Approval success!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:B,onClose:()=>{x(!1),u.setSubmitting(!1),location.reload()}})},onError:d=>{R.error("Update & Approval Failed!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:B,onClose:()=>{x(!1),u.setSubmitting(!1),location.reload()}})}})},200)}S()}else S(),u.setTouched({}),u.setSubmitting(!1),x(!1)};return e.jsx(G,{title:r?"Edit Institution Details":"View Institution Details",children:e.jsxs(_,{sx:{width:"100%"},children:[e.jsx(se,{activeStep:s,children:F.map((a,u)=>{const m={},d={};return v(u)&&(m.completed=!1),e.jsx(re,{...m,children:e.jsx(ne,{...d,children:a.label})},a.label)})}),s===F.length?e.jsx(h.Fragment,{children:U&&e.jsxs("div",{children:[e.jsx(A,{sx:{mt:2,mb:1},children:"Update is submitting, Kindly wait"}),e.jsxs(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(_,{sx:{flex:"1 1 auto"}}),e.jsx(de,{})]})]})}):e.jsx(K,{initialValues:k,enableReinitialize:!0,validationSchema:me[s],onSubmit:l,children:({isSubmitting:a,validateForm:u,setTouched:m})=>e.jsxs(Q,{children:[s===0&&e.jsx(_,{mt:2,children:e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"name",as:c,label:"Organization Name",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"name",component:o,error:!0}),e.jsx(i,{name:"description",as:c,label:"Description",fullWidth:!0,margin:"normal",multiline:!0,rows:4,disabled:!r}),e.jsx(n,{name:"description",component:o,error:!0}),e.jsxs(i,{name:"country",as:c,label:"Country",fullWidth:!0,margin:"normal",select:!0,disabled:!r,children:[e.jsx(b,{value:"Kenya",children:"Kenya"}),e.jsx(b,{value:"Rwanda",children:"Rwanda"}),e.jsx(b,{value:"Uganda",children:"Uganda"}),e.jsx(b,{value:"Zambia",children:"Zambia"}),e.jsx(b,{value:"Zimbambwe",children:"Zimbambwe"})]}),e.jsx(n,{name:"country",component:o,error:!0}),e.jsx(i,{name:"state",as:c,label:"State",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"state",component:o,error:!0}),e.jsx(i,{name:"primary_phone_number",as:c,label:"Primary Phone Number",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"primary_phone_number",component:o,error:!0}),e.jsx(i,{name:"primary_email_address",as:c,label:"Primary Email Address",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"primary_email_address",component:o,error:!0}),e.jsxs(i,{name:"industry",as:c,label:"Industry",fullWidth:!0,margin:"normal",select:!0,disabled:!r,children:[e.jsx(b,{value:"Real Estate",children:"Real Estate"}),e.jsx(b,{value:"Police",children:"Police"})]}),e.jsx(n,{name:"industry",component:o,error:!0}),e.jsx(i,{name:"contact_person_names",as:c,label:"Contact Person Names",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"contact_person_names",component:o,error:!0}),e.jsx(i,{name:"contact_person_phone_number",as:c,label:"Contact Person Phone Number",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"contact_person_phone_number",component:o,error:!0}),e.jsx(i,{name:"contact_person_email_address",as:c,label:"Contact Person Email Address",fullWidth:!0,margin:"normal",disabled:!r}),e.jsx(n,{name:"contact_person_email_address",component:o,error:!0}),e.jsx(i,{name:"application_date",as:c,label:"Application Date",type:"datetime-local",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},disabled:!r}),e.jsx(n,{name:"application_date",component:o,error:!0}),e.jsx(i,{name:"approval_date",as:c,label:"Approval Date",type:"datetime-local",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},disabled:!r}),e.jsx(n,{name:"approval_date",component:o,error:!0}),e.jsx(i,{name:"is_approved",children:({field:d})=>e.jsx(O,{control:e.jsx($,{...d,checked:d.value}),label:"Is Approved",disabled:!r})}),e.jsx(n,{name:"is_approved",component:o,error:!0}),e.jsx(i,{name:"is_test",children:({field:d})=>e.jsx(O,{control:e.jsx($,{...d,checked:d.value}),label:"Is Test",disabled:!r})}),e.jsx(n,{name:"is_test",component:o,error:!0}),e.jsx(i,{name:"approved_by",as:c,label:"Approved By",fullWidth:!0,margin:"normal",disabled:!0,InputLabelProps:{shrink:!0}}),e.jsx(n,{name:"approved_by",component:o,error:!0})]})}),s===1&&e.jsx(_,{mt:2,children:e.jsx(he,{isdisabled:!r,existingFiles:(t==null?void 0:t.supportingDocuments)||[]})}),e.jsxs(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(W,{color:"inherit",disabled:s===0,onClick:E,sx:{mr:1},children:"Back"}),e.jsx(_,{sx:{flex:"1 1 auto"}}),e.jsx(W,{type:"submit",disabled:a,children:s===F.length-1?r?"Update":t.is_approved?"":"Update & Approve":"Next"})]})]})})]})})}export{fe as default};
