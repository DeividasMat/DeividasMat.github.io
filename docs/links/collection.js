(() => {
const input=document.querySelector('#link-search'),status=document.querySelector('#search-status'),empty=document.querySelector('#no-results');
const groups=[...document.querySelectorAll('.collection-group')];
const total=document.querySelectorAll('.collection-item').length;
input.addEventListener('input',()=>{
 const query=input.value.trim().toLocaleLowerCase();let visible=0;
 for(const group of groups){let count=0;const items=[...group.querySelectorAll('.collection-item')];
  for(const item of items){const match=!query||item.textContent.toLocaleLowerCase().includes(query);item.hidden=!match;if(match)count++;}
  group.hidden=count===0;visible+=count;
  group.querySelector('.section-head>span').textContent=query?count+' of '+items.length+' links':items.length+' links';
  const jump=document.querySelector('.collection-nav a[href="#'+group.id+'"]');if(jump)jump.hidden=count===0;
 }
 status.textContent=query?visible+' of '+total+' links':total+' links';empty.hidden=visible>0;
});
})();