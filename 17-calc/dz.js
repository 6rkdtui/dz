'use strict';

function changeClickSum(){
    const numOne = Number(document.querySelector('.inputOne').value);
    const numTwo = Number(document.querySelector('.inputTwo').value);

    if (!numOne) {
		return;
	} else if (!numTwo){
        return;
    }

    const res = numOne + numTwo;
    document.querySelector('.res').innerText = res;
}

function changeClickDif(){
    const numOne = Number(document.querySelector('.inputOne').value);
    const numTwo = Number(document.querySelector('.inputTwo').value);

    if (!numOne) {
		return;
	} else if (!numTwo){
        return;
    }

    const res = numOne - numTwo;
    document.querySelector('.res').innerText = res;
}

function changeClickMul(){
    const numOne = Number(document.querySelector('.inputOne').value);
    const numTwo = Number(document.querySelector('.inputTwo').value);

    if (!numOne) {
		return;
	} else if (!numTwo){
        return;
    }

    const res = numOne * numTwo;
    document.querySelector('.res').innerText = res;
}

function changeClickDiv(){
    const numOne = Number(document.querySelector('.inputOne').value);
    const numTwo = Number(document.querySelector('.inputTwo').value);

    if (!numOne) {
		return;
	} else if (!numTwo){
        return;
    }

    const res = numOne / numTwo;
    document.querySelector('.res').innerText = res;
}