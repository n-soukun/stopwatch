# Stopwatch 262
Stopwatch built with 262 lines of JavaScript.

```javascript
d=q=>document.getElementById(q);c=f=0;b=d('start');o=d('stop');i='disabled';
setInterval(_=>p(c+f),10);m=n=>`0${~~n}`.slice(-2);
h=6000;p=n=>d('time').textContent=m(n/h)+':'+m(n%h/100)+':'+m(c=n);
start=_=>f=b[i]=!(o[i]=0);stop=z=_=>f=b[i]=!(o[i]=1);reset=_=>p(z())
```

# License
MIT License (see [LICENSE](./LICENSE) file).
