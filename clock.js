  function setClockTime(clockId, offSet) {
    const clock = document.getElementById(clockId);
    const dayElement = clock.querySelector('[data-day]');
    const hourHand = clock.querySelector('[data-hand-hour]');
    const minHand = clock.querySelector('[data-hand-min]');
    const secHand = clock.querySelector('[data-hand-sec]');
  
    
  
    
        const currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let day = currentDate.getDate();
        let tOs = currentDate.getTimezoneOffset()/60;
        let outSet = 0;
        if (tOs <= 0 && offSet <= 0){
            outSet = tOs - offSet;
        }else if (tOs < 0 && offSet > 0){
            outSet = tOs - offSet;
        }else if (tOs > 0 && offSet < 0){
            outSet = tOs + offSet;
        }else if (tOs > 0 && offSet > 0){
            outSet = -tOs + offSet;
        }
        
        if (Number.isInteger(outSet)) {
            hours = hours + outSet;
        } else {
            hours = hours + Math.floor(outSet);
            minutes = minutes + (outSet % 1) * 60;
        
            if (minutes >= 60) {
                hours = hours + 1;
                minutes = minutes - 60;
            } else if (minutes < 0) {
                hours = hours - 1;
                minutes = 60 + minutes;
            }
        }
        
        if (hours < 0) {
            hours = hours + 24;
            day = day - 1;
        } else if (hours >= 24) {
            hours = hours - 24;
            day = day + 1;}
        
    
    
  
    
    const hourRotation = (hours % 12 + minutes / 60) * 360 / 12;
    const minRotation = (minutes + seconds / 60) * 360 / 60;
    const secRotation = seconds * 360 / 60;
    
    
    hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${minRotation}deg)`;
    secHand.style.transform = `translateX(-50%) rotate(${secRotation}deg)`;
    dayElement.textContent = day;
  }
  

  function updateClock(clockId) {
    setInterval(function() {
     
      const timeZone = document.getElementById(`timeZone${clockId.slice(-1)}`).value;
  
      
      setClockTime(clockId, timeZone);
    }, 1000);
  }
  





