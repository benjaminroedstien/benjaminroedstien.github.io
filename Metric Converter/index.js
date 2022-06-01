

let meterFeet = document.getElementById("NumberInput")

function length(){

  
    resultsLenghtMeter.textContent =  meterFeet.value
    resultsLenghtfeet.textContent = meterFeet.value*3.238
    resultsLenghtMeterReversed.textContent = meterFeet.value
    resultsLenghtFeetReversed.textContent =meterFeet.value*0.323
    }

function volume(){
    
    resultsVolumeLiters.textContent =  meterFeet.value
    resultsVolumeGallons.textContent = meterFeet.value*0.264
    resultsVolumeLitersReversed.textContent = meterFeet.value*3.78
    resultsVolumeGallonsReversed.textContent =meterFeet.value
}

function weight(){

    resultsMassKilos.textContent =  meterFeet.value
    resultsMassPounds.textContent = meterFeet.value*2.204
    resultsMassPoundsReversed.textContent = meterFeet.value
    resultsMassKilosReversed.textContent =meterFeet.value*0.45359
    
}
 