const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const search=document.getElementById('jobSearch'),filter=document.getElementById('jobFilter'),list=document.getElementById('jobList');
function filterJobs(){const q=search.value.toLowerCase(),f=filter.value;document.querySelectorAll('.job-card').forEach(card=>{const matchText=card.dataset.search.includes(q),matchCat=f==='all'||card.dataset.category===f;card.style.display=matchText&&matchCat?'grid':'none'})}
search.addEventListener('input',filterJobs);filter.addEventListener('change',filterJobs);

function showNotice(message){const n=document.getElementById('notice');n.textContent=message;n.classList.add('show');setTimeout(()=>n.classList.remove('show'),4200)}
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();showNotice('Thank you. This demo form is ready to be connected to the organisation’s email or backend.');e.target.reset()});
