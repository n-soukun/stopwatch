# Stopwatch 245
Stopwatch made with 245 characters of JavaScript.

```javascript
d=q=>document.getElementById(q);c=f=0;b=d('start');o=d('stop');i='disabled';
setInterval(_=>p(c+f),10);m=n=>`0${~~n}`.slice(-2);
h=6000;p=n=>d('time').textContent=m(n/h)+':'+m(n%h/100)+':'+m(c=n);
start=stop=t=n=>f=b[i]=!(o[i]=f|n);reset=_=>p(t(1))
```

# License
MIT License (see [LICENSE](./LICENSE) file).
