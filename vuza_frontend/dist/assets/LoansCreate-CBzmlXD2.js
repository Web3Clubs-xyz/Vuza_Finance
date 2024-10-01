import{r as u,a as f,ae as _,a9 as v,b as C,j as e,w as L,T as r,aa as q,G as n,B as i,af as S,ag as k,ah as y,e as d,H as c,m as B,ai as A,aj as F,k as w,n as O,g as P}from"./index-BkwLtTZs.js";import{F as R,C as W}from"./FormControlLabel-CjUZIMk8.js";const G=()=>{const[E,m]=u.useState(!1),h=f(s=>O("/v1/loans/create/",s));_(),v();const[t,x]=u.useState({});C(["loan_terms"],()=>P("/v1/loan_terms"),{refetchOnWindowFocus:!1,onSuccess:s=>{x(s.data),m(!1)}});const p=[e.jsx(r,{sx:{fontWeight:"800",color:"secondary.dark"},children:"Create Loan Application"},"3")];return e.jsxs(e.Fragment,{children:[e.jsxs(L,{spacing:2,alignItems:"center",mb:4,children:[e.jsx(r,{variant:"h3",sx:{fontWeight:"bold",textAlign:"center"},children:"Loan Application"}),e.jsx(q,{separator:"›","aria-label":"breadcrumb",children:p})]}),e.jsx(n,{container:!0,direction:"row",justifyContent:"center",spacing:2,children:e.jsxs(n,{item:!0,xs:12,sm:10,md:8,children:[e.jsxs(i,{sx:{mb:4,p:3,border:"1px solid #ddd",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:[e.jsx(r,{variant:"h6",sx:{fontWeight:"600",mb:2},children:"Loan Terms"}),e.jsxs(r,{children:[e.jsx("strong",{children:"Interest Rate:"})," ",t==null?void 0:t.loan_interest,"%"]}),e.jsxs(r,{children:[e.jsx("strong",{children:"Return Period:"})," ",t==null?void 0:t.repayment_duration," Months"]})]}),e.jsx(S,{initialValues:{requested_amount:""},validationSchema:k().shape({requested_amount:y().required("Loan Amount is required").positive("Amount must be positive").min(5,"Minimum amount is $5")}),onSubmit:(s,{setSubmitting:o})=>{s.loan_terms_id=t==null?void 0:t.id,s.borrower_id=JSON.parse(localStorage.getItem("user")).organization_id,h.mutate(s,{onSuccess:a=>{d.success(a.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:c,onClose:()=>{o(!1),location.reload()}})},onError:a=>{d.error(a.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:c,onClose:()=>o(!1)})}})},children:({errors:s,handleBlur:o,handleChange:a,handleSubmit:g,isSubmitting:b,touched:l,values:j})=>e.jsxs("form",{noValidate:!0,onSubmit:g,children:[e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,sm:12,children:e.jsx(B,{fullWidth:!0,label:"Loan Amount (in USD)",margin:"normal",name:"requested_amount",value:j.requested_amount,onBlur:o,onChange:a,type:"number",inputProps:{min:5},variant:"outlined",helperText:l.requested_amount&&s.requested_amount,error:l.requested_amount&&!!s.requested_amount})}),e.jsx(n,{item:!0,xs:12,sm:12,children:e.jsx(R,{control:e.jsx(W,{checked:!0,name:"checked",color:"primary"}),label:e.jsx(r,{variant:"subtitle1",children:"I Agree with the Loan Terms"})})})]}),s.submit&&e.jsx(i,{sx:{mt:3},children:e.jsx(A,{error:!0,children:s.submit})}),e.jsx(i,{sx:{mt:2},children:e.jsx(F,{children:e.jsx(w,{disableElevation:!0,disabled:b,sx:{borderRadius:"20px",color:"white"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Submit Request"})})})]})})]})})]})};export{G as default};
