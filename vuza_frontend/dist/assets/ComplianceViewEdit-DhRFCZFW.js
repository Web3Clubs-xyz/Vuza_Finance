import{r as m,ae as O,a9 as N,b as $,a as H,j as e,ak as Z,B as _,T as U,af as V,aT as Y,aU as l,m as d,aV as r,ai as o,k as A,ag as I,aW as c,aZ as z,aX as G,a_ as K,G as M,e as R,H as T,a$ as q,n as Q,g as X,d as J}from"./index-BkwLtTZs.js";import{S as ee,a as ae,b as te,h as se,u as ne,d as re}from"./moment-Bh2CcBIg.js";import{C as oe}from"./CircularProgress-CnAXhX3U.js";import{M as b}from"./MenuItem-CJmUos5b.js";const F=[{label:"Institution Details",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Supporting Documents",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}],ie=({label:s,isdisabled:g,existingFiles:f,...y})=>{const[W,x,t]=q(y),[w,j]=m.useState(!1),D=async i=>{try{j(!0);const a=await Q("/v1/file/get/",{file_path:i});console.log(a),window.open(a.presignedUrl,"_blank","noopener,noreferrer"),j(!1)}catch(a){j(!1),console.error("Error fetching presigned URL:",a)}},n=i=>{t.setValue(i)},{acceptedFiles:k,getRootProps:P,getInputProps:C,isDragActive:v}=ne({onDrop:n}),S=k.map(i=>e.jsxs("li",{children:[i.path," - ",i.size," bytes"]},i.path)),E=f.map(i=>{const[,a]=i.split("/");return e.jsx("a",{children:e.jsx("li",{onClick:()=>D(i),children:a},i)})});return e.jsxs("div",{children:[e.jsxs("aside",{children:[e.jsx("h4",{children:"Existing Files"}),w?"File Loading":e.jsx(e.Fragment,{children:e.jsx("ul",{children:E})}),e.jsx("h4",{children:"New Files"}),e.jsx("ul",{children:S})]}),e.jsxs("div",{...P(),style:{outline:"none"},children:[e.jsx("input",{...C(),multiple:!0}),e.jsxs("div",{style:{border:"2px dashed #ced4da",borderRadius:"8px",padding:"16px",textAlign:"center",cursor:"pointer",background:v?"#f8f9fa":"transparent"},children:[e.jsx(re,{}),e.jsxs(U,{variant:"subtitle1",children:[" ",s]})]})]}),x.error?e.jsx(o,{error:!0,children:e.jsx(r,{name:y.name})}):null]})},le=1024*1024*10,de=["application/pdf","image/jpeg","image/png"],ce=[I().shape({name:c().required("Organization Name is required"),description:c().nullable(),country:c().nullable(),state:c().nullable(),primary_phone_number:c().nullable(),primary_email_address:c().email("Must be a valid email").nullable(),industry:c().nullable(),contact_person_names:c().nullable(),contact_person_phone_number:c().nullable(),contact_person_email_address:c().email("Must be a valid email").nullable(),organization_type:z().nullable(),approved_by:c().nullable(),created_at:G().nullable(),created_by:c().nullable()}),I().shape({supportingDocuments:K().of(z().test("fileSize","File is too large",s=>(console.log(s),s?s.size<=le:!0)).test("fileFormat","Unsupported Format",s=>s?de.includes(s.type):!0))})],pe=({isdisabled:s,existingFiles:g})=>e.jsx(e.Fragment,{children:e.jsx(M,{container:!0,spacing:2,children:e.jsxs(M,{item:!0,xs:12,children:[e.jsx(ie,{name:"supportingDocuments",existingFiles:g,label:"Upload Contractual Documents",isdisabled:s}),e.jsx(U,{children:"e.g) Financial Documents,Contracts, MoU etc "})]})})}),L=s=>se(s).format("YYYY-MM-DD HH:mm:ss");function be(){const[s,g]=m.useState(0),[f,y]=m.useState(new Set),[W,x]=m.useState(!1),[t,w]=m.useState(),{pathname:j}=O(),{guid:D=""}=N(),n=j.includes("edit");console.log(n);const[k,P]=m.useState({name:"",description:"",country:"",state:"",primary_phone_number:"",primary_email_address:"",industry:"",contact_person_names:"",contact_person_phone_number:"",contact_person_email_address:"",application_date:"",approval_date:"",is_approved:!1,is_test:!1,approved_by:"",supportingDocuments:[],created_at:"",created_by:""});$("get_organization",()=>X(`/v1/organizations/by_guid/${D}/`),{refetchOnWindowFocus:!1,onSuccess:a=>w(a.data[0])}),m.useEffect(()=>{t&&P({name:t.name||"",description:t.description||"",country:t.country||"",state:t.state||"",primary_phone_number:t.primary_phone_number||"",primary_email_address:t.primary_email_address||"",industry:t.industry||"",contact_person_names:t.contact_person_names||"",contact_person_phone_number:t.contact_person_phone_number||"",contact_person_email_address:t.contact_person_email_address||"",application_date:L(t.application_date)||"",approval_date:L(t.approval_date)||"",is_approved:t.is_approved||!1,is_test:t.is_test||!1,approved_by:t.approved_by||"",supportingDocuments:t.supportingDocuments||[],created_at:t.created_at||"",created_by:t.created_by||""})},[t]);const C=H(a=>J(`/v1/organizations/update/${t.guid}/`,a)),v=a=>f.has(a),S=()=>{let a=f;v(s)&&(a=new Set(a.values()),a.delete(s)),g(p=>p+1),y(a)},E=()=>{g(a=>a-1)},i=(a,p)=>{if(console.log("submitting"),s===F.length-1){if(n){x(!0),console.log(a),delete a.application_date,delete a.approval_date;const u=new FormData;for(let h in a)h==="supportingDocuments"?(console.log(a.supportingDocuments),a.supportingDocuments.forEach(B=>{console.log("here"),u.append("files",B)}),console.log(u)):u.append(h,a[h]);setTimeout(()=>{C.mutate(u,{onSuccess:h=>{R.success("Update & Approval success!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:T,onClose:()=>{x(!1),p.setSubmitting(!1),location.reload()}})},onError:h=>{R.error("Update & Approval Failed!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:T,onClose:()=>{x(!1),p.setSubmitting(!1),location.reload()}})}})},200)}S()}else S(),p.setTouched({}),p.setSubmitting(!1),x(!1)};return e.jsx(Z,{title:"Compliance Details",children:e.jsxs(_,{sx:{width:"100%"},children:[e.jsx(ee,{activeStep:s,children:F.map((a,p)=>{const u={},h={};return v(p)&&(u.completed=!1),e.jsx(ae,{...u,children:e.jsx(te,{...h,children:a.label})},a.label)})}),s===F.length?e.jsx(m.Fragment,{children:W&&e.jsxs("div",{children:[e.jsx(U,{sx:{mt:2,mb:1},children:"Update is submitting, Kindly wait"}),e.jsxs(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(_,{sx:{flex:"1 1 auto"}}),e.jsx(oe,{})]})]})}):e.jsx(V,{initialValues:k,enableReinitialize:!0,validationSchema:ce[s],onSubmit:i,children:({isSubmitting:a,validateForm:p,setTouched:u})=>e.jsxs(Y,{children:[s===0&&e.jsx(_,{mt:2,children:e.jsxs(e.Fragment,{children:[e.jsx(l,{name:"name",as:d,label:"Organization Name",fullWidth:!0,margin:"normal",disabled:!0}),e.jsx(r,{name:"name",component:o,error:!0}),e.jsx(l,{name:"description",as:d,label:"Description",fullWidth:!0,margin:"normal",multiline:!0,rows:4,disabled:!n}),e.jsx(r,{name:"description",component:o,error:!0}),e.jsxs(l,{name:"country",as:d,label:"Country",fullWidth:!0,margin:"normal",select:!0,disabled:!n,children:[e.jsx(b,{value:"Kenya",children:"Kenya"}),e.jsx(b,{value:"Rwanda",children:"Rwanda"}),e.jsx(b,{value:"Uganda",children:"Uganda"}),e.jsx(b,{value:"Zambia",children:"Zambia"}),e.jsx(b,{value:"Zimbambwe",children:"Zimbambwe"})]}),e.jsx(r,{name:"country",component:o,error:!0}),e.jsx(l,{name:"state",as:d,label:"State",fullWidth:!0,margin:"normal",disabled:!n}),e.jsx(r,{name:"state",component:o,error:!0}),e.jsx(l,{name:"primary_phone_number",as:d,label:"Primary Phone Number",fullWidth:!0,margin:"normal",disabled:!n}),e.jsx(r,{name:"primary_phone_number",component:o,error:!0}),e.jsx(l,{name:"primary_email_address",as:d,label:"Primary Email Address",fullWidth:!0,margin:"normal",disabled:!n}),e.jsx(r,{name:"primary_email_address",component:o,error:!0}),e.jsxs(l,{name:"industry",as:d,label:"Industry",fullWidth:!0,margin:"normal",select:!0,disabled:!n,children:[e.jsx(b,{value:"Real Estate",children:"Real Estate"}),e.jsx(b,{value:"Police",children:"Police"})]}),e.jsx(r,{name:"industry",component:o,error:!0}),e.jsx(l,{name:"contact_person_names",as:d,label:"Contact Person Names",fullWidth:!0,margin:"normal",disabled:!n}),e.jsx(r,{name:"contact_person_names",component:o,error:!0}),e.jsx(l,{name:"contact_person_phone_number",as:d,label:"Contact Person Phone Number",fullWidth:!0,margin:"normal",disabled:!n}),e.jsx(r,{name:"contact_person_phone_number",component:o,error:!0}),e.jsx(l,{name:"contact_person_email_address",as:d,label:"Contact Person Email Address",fullWidth:!0,margin:"normal",disabled:!0}),e.jsx(r,{name:"contact_person_email_address",component:o,error:!0}),e.jsx(l,{name:"application_date",as:d,label:"Application Date",type:"datetime-local",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},disabled:!0}),e.jsx(r,{name:"application_date",component:o,error:!0}),e.jsx(l,{name:"approval_date",as:d,label:"Approval Date",type:"datetime-local",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},disabled:!0}),e.jsx(r,{name:"approval_date",component:o,error:!0}),e.jsx(l,{name:"approved_by",as:d,label:"Approved By",fullWidth:!0,margin:"normal",disabled:!0,InputLabelProps:{shrink:!0}}),e.jsx(r,{name:"approved_by",component:o,error:!0})]})}),s===1&&e.jsx(_,{mt:2,children:e.jsx(pe,{isdisabled:!n,existingFiles:(t==null?void 0:t.supportingDocuments)||[]})}),e.jsxs(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(A,{color:"inherit",disabled:s===0,onClick:E,sx:{mr:1},children:"Back"}),e.jsx(_,{sx:{flex:"1 1 auto"}}),e.jsx(A,{type:"submit",disabled:a,children:s===F.length-1?n?"Update":t.is_approved?"":"Update & Approve":"Next"})]})]})})]})})}export{be as default};
