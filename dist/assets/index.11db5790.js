import{c}from"./vendor.509b8e4d.js";const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};a();const u="https://dnxywkreahifkqjrtkjh.supabase.co",d="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUxMTY0NCwiZXhwIjoxOTU3MDg3NjQ0fQ.u1m1QGAK1JWmhmgKDdt_YFMyrISqpuBHujoSKXTA_gE",f=c(u,d),l=document.getElementById("form"),m=document.getElementById("email"),p=document.getElementById("password");l.addEventListener("submit",async i=>{i.preventDefault();const{user:o,session:s,error:r}=await f.auth.signUp({email:m.value,password:p.value});console.log(o,s,r),l.reset()});