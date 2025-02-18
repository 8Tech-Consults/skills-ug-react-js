var b=Object.defineProperty;var g=(i,t,e)=>t in i?b(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>g(i,typeof t!="symbol"?t+"":t,e);import{ag as h,L as m}from"./index-CEN82tz0.js";class c{constructor(){r(this,"id","");r(this,"created_at","");r(this,"updated_at","");r(this,"applicant_id","");r(this,"applicant_text","");r(this,"job_id","");r(this,"job_text","");r(this,"employer_id","");r(this,"employer_text","");r(this,"attachments","");r(this,"employer_message","");r(this,"applicant_message","");r(this,"decline_reason","");r(this,"status","");r(this,"interview_email_sent","");r(this,"hired_email_sent","");r(this,"declinded_email_sent","");r(this,"interview_scheduled_at","");r(this,"interview_location","");r(this,"interview_type","");r(this,"interview_result","");r(this,"interviewer_notes","");r(this,"interviewer_rating","");r(this,"interviewee_feedback","");r(this,"interviewee_notes","");r(this,"interviewee_rating","");r(this,"contract_url","");r(this,"onboarding_start_date","");r(this,"onboarding_notes","");r(this,"additional_info","")}updateProfile(t){Object.assign(this,t)}toJSON(){const t={};for(const e in this)Object.prototype.hasOwnProperty.call(this,e)&&(t[e]=this[e]);return t}static fromJson(t){const e=new c;let o=typeof t=="string"?{}:t;if(typeof t=="string")try{o=JSON.parse(t)}catch{return e}const a=Object.keys(e);for(const s of Object.keys(o))a.includes(s)&&(e[s]=o[s]);return e}static async fetchJobs(t=1,e={}){try{const o=new URLSearchParams({page:String(t),...Object.fromEntries(Object.entries(e).map(([n,d])=>[n,String(d)]))}),a=await h(`/my-job-applications?${o.toString()}`);if(console.log(a),a.code!==1)throw new Error(a.message||"Failed to fetch jobs.");const s=a.data;return s.data=s.data.map(n=>c.fromJson(n)),s}catch(o){throw console.error("Error fetching jobs:",o),o}}static async fetchCompanyJobs(t=1,e={}){try{const o=new URLSearchParams({page:String(t),...Object.fromEntries(Object.entries(e).map(([n,d])=>[n,String(d)]))}),a=await h(`/company-job-applications?${o.toString()}`);if(console.log(a),a.code!==1)throw new Error(a.message||"Failed to fetch jobs.");const s=a.data;return s.data=s.data.map(n=>c.fromJson(n)),s}catch(o){throw console.error("Error fetching jobs:",o),o}}static async fetchMyJobs(t=1,e={}){try{const o=new URLSearchParams({page:String(t),...Object.fromEntries(Object.entries(e).map(([n,d])=>[n,String(d)]))}),a=await h(`/my-jobs?${o.toString()}`);if(console.log(a),a.code!==1)throw new Error(a.message||"Failed to fetch user jobs.");const s=a.data;return s.data=s.data.map(n=>c.fromJson(n)),s}catch(o){throw console.error("Error fetching my-jobs:",o),o}}static async fetchJobById(t){try{const e=await h(`/jobs/${t}`);if(e.code!==1)throw new Error(e.message||"Failed to fetch job.");return c.fromJson(e.data)}catch(e){throw console.error("Error fetching job by ID:",e),e}}static async createJob(t){try{const e=await m("/jobs",t);if(e.code!==1)throw new Error(e.message||"Failed to create job.");return c.fromJson(e.data)}catch(e){throw console.error("Error creating job:",e),e}}static async updateJob(t,e){try{const o=await m(`/jobs/${t}?_method=PUT`,e);if(o.code!==1)throw new Error(o.message||"Failed to update job.");return c.fromJson(o.data)}catch(o){throw console.error("Error updating job:",o),o}}static async deleteJob(t){try{const e=await m(`/jobs/${t}?_method=DELETE`,{});if(e.code!==1)throw new Error(e.message||"Failed to delete job.");return!0}catch(e){throw console.error("Error deleting job:",e),e}}}export{c as M};
