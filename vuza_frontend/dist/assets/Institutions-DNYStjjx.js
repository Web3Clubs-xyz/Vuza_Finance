import{i as C,r as s,b as j,j as e,B as w,T as S,G as v,C as b,c as N,M as k,g as y}from"./index-BkwLtTZs.js";import"./LatestRecordsTable-lFw6zZ3Z.js";import{f as M,d as E}from"./MoreVert-DJv2YjZ7.js";import{I as _}from"./IconButton-uj-dTrfO.js";import{M as d}from"./MenuItem-CJmUos5b.js";import{D as G,G as I}from"./DataGrid-2T64eQmx.js";import"./KeyboardArrowRight-B-jXHbFr.js";import"./FormControlLabel-CjUZIMk8.js";import"./InputAdornment-CCLjCbJ9.js";import"./Tooltip-gUntIbdj.js";import"./CircularProgress-CnAXhX3U.js";const H=({})=>{const o=C(),[A,u]=s.useState(!1),[n,c]=s.useState([]),[r,l]=s.useState(null),[a,p]=s.useState(null),h=(t,i)=>{l(t.currentTarget),p(i)},m=()=>{l(null)},x=t=>{o(`/institutions/${t}/view`)},f=t=>{o(`/institutions/${t}/edit`)},g=[{field:"name",headerName:"Institution Name",width:250},{field:"country",headerName:"Country",width:100},{field:"payment_pointer",headerName:"Payment Pointer",width:350},{field:"contact_person_names",headerName:"Contact Person ",width:150},{field:"created_at",headerName:"Date Created",width:150,valueFormatter:t=>M(t)},{field:"is_approved",headerName:"Status",width:150,renderCell:t=>t.value?"Approved":"Not Approved"},{field:"actions",headerName:"Actions",disableExport:!0,width:100,renderCell:t=>e.jsxs(e.Fragment,{children:[e.jsx(_,{"aria-controls":"menu","aria-haspopup":"true",onClick:i=>h(i,t.row),children:e.jsx(E,{})}),e.jsxs(k,{sx:{width:"200px"},id:"menu",anchorEl:r,keepMounted:!0,open:!!r,onClose:m,children:[e.jsx(d,{onClick:()=>x(a==null?void 0:a.guid),children:"View"}),e.jsx(d,{onClick:()=>f(a==null?void 0:a.guid),children:"Edit"})]})]})}];return j(["all_organizations"],()=>y("/v1/organizations/all"),{refetchOnWindowFocus:!1,onSuccess:t=>{c(t.data),u(!1)}}),e.jsx(e.Fragment,{children:e.jsxs(w,{sx:{px:2,pt:5},children:[e.jsxs(S,{variant:"h2",children:["All Institutions (",n.length,")"]}),e.jsx("br",{}),e.jsx(v,{item:!0,xs:12,children:e.jsx(b,{sx:{borderRadius:"12px",boxShadow:3},children:e.jsx(N,{children:e.jsx(G,{rows:n,columns:g,disableDensitySelector:!0,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10],slots:{toolbar:I},slotProps:{toolbar:{csvOptions:{allColumns:!0},showQuickFilter:!0}},autoHeight:!0})})})})]})})};export{H as default};
