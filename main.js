(()=>{"use strict";let e=()=>{let t=document.getElementById("container"),n=document.createElement("div");return n.classList.add("cardSection"),t.appendChild(n),e},t=e=>{for(let t=0;t<=e;t++){let e=document.querySelector(".cardSection"),t=document.createElement("div");t.classList.add("cards"),e.appendChild(t)}return t},n=()=>{e(),t(3);let a=document.getElementsByClassName("cards"),d=document.createElement("h3"),l=document.createElement("p");d.classList.add("title"),l.classList.add("para"),d.textContent="Welcome to our awesome restaurant!",l.textContent="This is a family restaurant. Come and enjoy a family environment. Pets are also welcome!",a[0].appendChild(d),a[0].appendChild(l);let o=document.createElement("h3"),i=document.createElement("ul");o.classList.add("title"),i.classList.add("para"),o.textContent="Schedule";let r=document.createElement("li");r.textContent="Monday: 7 AM to 6 PM",i.appendChild(r);let c=document.createElement("li");c.textContent="Tuesday: 7 AM to 6 PM",i.appendChild(c);let s=document.createElement("li");s.textContent="Wednesday: 7 AM to 6 PM",i.appendChild(s);let m=document.createElement("li");m.textContent="Thursday: 7 AM to 6 PM",i.appendChild(m);let u=document.createElement("li");u.textContent="Friday: 7 AM to 6 PM",i.appendChild(u);let p=document.createElement("li");p.textContent="Saturday: 7 AM to 6 PM",i.appendChild(p);let h=document.createElement("li");h.textContent="Sunday: 7 AM to 6 PM",i.appendChild(h),a[1].appendChild(o),a[1].appendChild(i);let C=document.createElement("h3"),y=document.createElement("p");return C.classList.add("title"),y.classList.add("para"),C.textContent="Contact us",y.textContent="You can reach us at 555888555 or at 000111000",a[2].appendChild(C),a[2].appendChild(y),n},a=(e,t,n)=>{let d=document.getElementsByClassName("cards"),l=document.createElement("h3"),o=document.createElement("p");return l.textContent=e,o.textContent=t,d[n].appendChild(l),d[n].appendChild(o),a},d=()=>{e(),t(5);let n=document.getElementsByClassName("cards"),l=document.createElement("h5");return l.textContent="Lear about us!",n[0].appendChild(l),a("Chef of Cuisine: Odin","Odin is our expert Husky Chef. He can cook amazing dishes beyond your imagination",1),a("Sous Chef: Nina","Nina is our brillian Golden Retriever chef. Her creativity in the kitchen is without limits",2),a("Chef de Partie: Logan","Logan is our talented Aleman Shepar. You won't be able to stop eating his preparations!",3),a("Commis Chef: Freya","Freya is our promising Golden Retriever chef apprendice. If you eat one of her dishes, you will see the brilliant future that awaits for her!",4),d};console.log("Hi again"),n(),d()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R1AsWUFBWThCLEdBRXBCUCxFQUFXLHdCQUF5QixvRkFBcUYsR0FDekhBLEVBQVcsa0JBQW1CLDhGQUErRixHQUM3SEEsRUFBVyx3QkFBeUIsMEZBQTJGLEdBQy9IQSxFQUFXLHFCQUFzQixnSkFBaUosR0FFM0tNLEdDeEJYRSxRQUFRQyxJQUFJLFlBQ1oxQixJQUNBdUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvQWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGxldCBjYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmRTZWN0aW9uJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRTZWN0aW9uKSAgXG4gICAgcmV0dXJuIGNhcmRzQ29udGFpbmVyICBcbiAgICBcbn1cblxubGV0IGNhcmRzID0gKG51bSkgPT57XG4gICAgZm9yKGxldCBpPTA7IGk8PW51bTsgaSsrKXtcbiAgICAgICAgbGV0IGNhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRTZWN0aW9uJylcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7ICAgICAgICAgIFxuICAgICAgICBjYXJkU2VjdGlvbi5hcHBlbmRDaGlsZChjYXJkKVxuICAgIH1cbiAgICByZXR1cm4gY2FyZHNcbn1cblxuZXhwb3J0e2NhcmRzQ29udGFpbmVyLCBjYXJkc30iLCJpbXBvcnQge2NhcmRzQ29udGFpbmVyLCBjYXJkc30gZnJvbSBcIi4vcGFnZWxvYWRcIjtcblxubGV0IGhvbWUgPSAoKSA9PiB7XG5cbmNhcmRzQ29udGFpbmVyKCk7XG5jYXJkcygzKVxuXG5sZXQgZGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRzJylcblxubGV0IGZpcnN0RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5sZXQgZmlyc3REaXZQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5maXJzdERpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbmZpcnN0RGl2UGFyYS5jbGFzc0xpc3QuYWRkKCdwYXJhJylcbmZpcnN0RGl2VGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBvdXIgYXdlc29tZSByZXN0YXVyYW50ISdcbmZpcnN0RGl2UGFyYS50ZXh0Q29udGVudCA9ICdUaGlzIGlzIGEgZmFtaWx5IHJlc3RhdXJhbnQuIENvbWUgYW5kIGVuam95IGEgZmFtaWx5IGVudmlyb25tZW50LiBQZXRzIGFyZSBhbHNvIHdlbGNvbWUhJ1xuZGl2c1swXS5hcHBlbmRDaGlsZChmaXJzdERpdlRpdGxlKVxuZGl2c1swXS5hcHBlbmRDaGlsZChmaXJzdERpdlBhcmEpXG5cblxubGV0IHNlY29uZERpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxubGV0IHNlY29uZERpdlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5zZWNvbmREaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5zZWNvbmREaXZQYXJhLmNsYXNzTGlzdC5hZGQoJ3BhcmEnKVxuc2Vjb25kRGl2VGl0bGUudGV4dENvbnRlbnQgPSAnU2NoZWR1bGUnXG5cbmxldCB1bDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG51bDEudGV4dENvbnRlbnQgPSAnTW9uZGF5OiA3IEFNIHRvIDYgUE0nXG5zZWNvbmREaXZQYXJhLmFwcGVuZENoaWxkKHVsMSlcbmxldCB1bDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG51bDIudGV4dENvbnRlbnQgPSAnVHVlc2RheTogNyBBTSB0byA2IFBNJ1xuc2Vjb25kRGl2UGFyYS5hcHBlbmRDaGlsZCh1bDIpXG5sZXQgdWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxudWwzLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogNyBBTSB0byA2IFBNJ1xuc2Vjb25kRGl2UGFyYS5hcHBlbmRDaGlsZCh1bDMpXG5sZXQgdWw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxudWw0LnRleHRDb250ZW50ID0gJ1RodXJzZGF5OiA3IEFNIHRvIDYgUE0nXG5zZWNvbmREaXZQYXJhLmFwcGVuZENoaWxkKHVsNClcbmxldCB1bDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG51bDUudGV4dENvbnRlbnQgPSAnRnJpZGF5OiA3IEFNIHRvIDYgUE0nXG5zZWNvbmREaXZQYXJhLmFwcGVuZENoaWxkKHVsNSlcbmxldCB1bDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG51bDYudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDcgQU0gdG8gNiBQTSdcbnNlY29uZERpdlBhcmEuYXBwZW5kQ2hpbGQodWw2KVxubGV0IHVsNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbnVsNy50ZXh0Q29udGVudCA9ICdTdW5kYXk6IDcgQU0gdG8gNiBQTSdcbnNlY29uZERpdlBhcmEuYXBwZW5kQ2hpbGQodWw3KVxuZGl2c1sxXS5hcHBlbmRDaGlsZChzZWNvbmREaXZUaXRsZSlcbmRpdnNbMV0uYXBwZW5kQ2hpbGQoc2Vjb25kRGl2UGFyYSlcblxubGV0IHRoaXJkRGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5sZXQgdGhpcmREaXZQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG50aGlyZERpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbnRoaXJkRGl2UGFyYS5jbGFzc0xpc3QuYWRkKCdwYXJhJylcbnRoaXJkRGl2VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cydcbnRoaXJkRGl2UGFyYS50ZXh0Q29udGVudCA9ICdZb3UgY2FuIHJlYWNoIHVzIGF0IDU1NTg4ODU1NSBvciBhdCAwMDAxMTEwMDAnXG5kaXZzWzJdLmFwcGVuZENoaWxkKHRoaXJkRGl2VGl0bGUpXG5kaXZzWzJdLmFwcGVuZENoaWxkKHRoaXJkRGl2UGFyYSlcblxuXG5cblxuXG5cblxucmV0dXJuIGhvbWVcblxufVxuXG5leHBvcnR7aG9tZX07IiwiaW1wb3J0IHsgY2FyZHNDb250YWluZXIsIGNhcmRzIH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcblxuXG5sZXQgY3JlYXRlRGl2cyA9ICh0aXRsZSwgcGFyYSwgZGl2TnVtKSA9PiB7XG4gICAgbGV0IGRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkcycpXG4gICAgbGV0IGNoZWZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBsZXQgY2hlZlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjaGVmVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVxuICAgIGNoZWZQYXJhLnRleHRDb250ZW50ID0gcGFyYVxuICAgIGRpdnNbZGl2TnVtXS5hcHBlbmRDaGlsZChjaGVmVGl0bGUpXG4gICAgZGl2c1tkaXZOdW1dLmFwcGVuZENoaWxkKGNoZWZQYXJhKVxuXG4gICAgcmV0dXJuIGNyZWF0ZURpdnNcbn1cblxubGV0IGNoZWZzID0gKCkgPT4ge1xuXG4gICAgY2FyZHNDb250YWluZXIoKVxuICAgIGNhcmRzKDUpICAgIFxuXG4gICAgbGV0IGRpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkcycpXG4gICAgbGV0IGNoZWZzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpXG4gICAgY2hlZnNUaXRsZS50ZXh0Q29udGVudCA9ICdMZWFyIGFib3V0IHVzISdcbiAgICBkaXZzWzBdLmFwcGVuZENoaWxkKGNoZWZzVGl0bGUpXG5cbiAgICBjcmVhdGVEaXZzKCdDaGVmIG9mIEN1aXNpbmU6IE9kaW4nLCAnT2RpbiBpcyBvdXIgZXhwZXJ0IEh1c2t5IENoZWYuIEhlIGNhbiBjb29rIGFtYXppbmcgZGlzaGVzIGJleW9uZCB5b3VyIGltYWdpbmF0aW9uJywgMSlcbiAgICBjcmVhdGVEaXZzKCdTb3VzIENoZWY6IE5pbmEnLCAnTmluYSBpcyBvdXIgYnJpbGxpYW4gR29sZGVuIFJldHJpZXZlciBjaGVmLiBIZXIgY3JlYXRpdml0eSBpbiB0aGUga2l0Y2hlbiBpcyB3aXRob3V0IGxpbWl0cycsIDIgKVxuICAgIGNyZWF0ZURpdnMoJ0NoZWYgZGUgUGFydGllOiBMb2dhbicsIFwiTG9nYW4gaXMgb3VyIHRhbGVudGVkIEFsZW1hbiBTaGVwYXIuIFlvdSB3b24ndCBiZSBhYmxlIHRvIHN0b3AgZWF0aW5nIGhpcyBwcmVwYXJhdGlvbnMhXCIsIDMpXG4gICAgY3JlYXRlRGl2cygnQ29tbWlzIENoZWY6IEZyZXlhJywgXCJGcmV5YSBpcyBvdXIgcHJvbWlzaW5nIEdvbGRlbiBSZXRyaWV2ZXIgY2hlZiBhcHByZW5kaWNlLiBJZiB5b3UgZWF0IG9uZSBvZiBoZXIgZGlzaGVzLCB5b3Ugd2lsbCBzZWUgdGhlIGJyaWxsaWFudCBmdXR1cmUgdGhhdCBhd2FpdHMgZm9yIGhlciFcIiwgNClcbiAgICBcbiAgICByZXR1cm4gY2hlZnNcbn1cblxuZXhwb3J0e2NoZWZzfSIsImltcG9ydCB7aG9tZX0gZnJvbSBcIi4vaG9tZVRhYlwiXG5pbXBvcnQge2NoZWZzfSBmcm9tIFwiLi9BYm91dFVzXCJcblxuXG5cblxuY29uc29sZS5sb2coJ0hpIGFnYWluJyk7XG5ob21lKClcbmNoZWZzKClcblxuXG5cbiJdLCJuYW1lcyI6WyJjYXJkc0NvbnRhaW5lciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXJkU2VjdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNhcmRzIiwibnVtIiwiaSIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkIiwiaG9tZSIsImRpdnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZmlyc3REaXZUaXRsZSIsImZpcnN0RGl2UGFyYSIsInRleHRDb250ZW50Iiwic2Vjb25kRGl2VGl0bGUiLCJzZWNvbmREaXZQYXJhIiwidWwxIiwidWwyIiwidWwzIiwidWw0IiwidWw1IiwidWw2IiwidWw3IiwidGhpcmREaXZUaXRsZSIsInRoaXJkRGl2UGFyYSIsImNyZWF0ZURpdnMiLCJ0aXRsZSIsInBhcmEiLCJkaXZOdW0iLCJjaGVmVGl0bGUiLCJjaGVmUGFyYSIsImNoZWZzIiwiY2hlZnNUaXRsZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9