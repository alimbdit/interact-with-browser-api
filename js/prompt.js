const alertMessage = () => {
    alert("taka dhar de dst. only 500..");
}

const cofirmMessge = () => {
    const loan = confirm('taka ki dibi??');
    if(loan){
        alert('you are my real frnd!!');
    }
    else{
        console.log('dure giye mor...!!!');
    }
}

const promptMessage = () => {
    const name = prompt('Give your name');
    if(name){
        alert(name + " Welcome to our world!!!")
    }
    else{
        alert("you are not allowed!!")
    }
}