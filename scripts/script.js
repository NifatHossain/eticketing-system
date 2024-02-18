function seatClick(id){
    
    
    if(document.getElementById(id).classList.contains('clicked')){
        document.getElementById(id).classList.remove('clicked');
        document.getElementById(id).classList.replace('bg-[#1DD100]','bg-[#F7F8F8]');
        document.getElementById(id).classList.replace('text-white','text-gray-600');
        //decreasing seat number
        let seats= parseInt(document.getElementById('seatSelected').innerText);
        seats= seats-1;
        document.getElementById('seatSelected').innerText= seats;
        //Increase Left Seat
        let left=  parseInt(document.getElementById('seatLeft').innerText);
        left= left+1;
        document.getElementById('seatLeft').innerText= left;
        //Increase Left Seat
        // removing ticket info
        const box= document.getElementById(`${id}`+'append');
        box.id='no';
        box.innerHTML= `
        
        `;
        // decreasing total price
        let tPrice= parseInt(document.getElementById('totalPrice').innerText);
        tPrice= tPrice-550;
        document.getElementById('totalPrice').innerText=tPrice;
        //Grand total decrease
        let grand= parseInt(document.getElementById('grandTotal').innerText);
        grand= tPrice;
        document.getElementById('grandTotal').innerText= grand;
        //coupon
        if(seats< 4){
            if(document.getElementById('couponContainer').classList.contains('hidden')){
                document.getElementById('couponContainer').classList.replace('hidden', 'block')
            }
            
            const inp= document.getElementById('couponInp');
            inp.setAttribute('disabled', '');
            const btn= document.getElementById('couponBtn');
            btn.setAttribute('disabled', '');
        }
        
            
        
        
    }
    // document.getElementById(id).setAttribute('disabled', true);
    else{
        if(totalSeats()){
            alert('You can select maximum 4 seats');
        }
        else{
            document.getElementById(id).classList.add('clicked');
            document.getElementById(id).classList.replace('bg-[#F7F8F8]','bg-[#1DD100]');
            document.getElementById(id).classList.replace('text-gray-600','text-white');
            //increasing seat number
            let seats= parseInt(document.getElementById('seatSelected').innerText);
            if(seats<4){
                seats= seats+1;
                document.getElementById('seatSelected').innerText= seats;
            }
            //decrease Left Seat
            let left=  parseInt(document.getElementById('seatLeft').innerText);
            left= left-1;
            document.getElementById('seatLeft').innerText= left;
            //Adding ticket info
            const boxWrapper = document.getElementById("ticketInfo");
            const box = document.createElement("div");
            box.id=`${id}`+'append';
            box.innerHTML = `     
            <div class="flex justify-between">
                <p>${id}</p>
                <p>Economy</p>
                <p>550</p>
            </div>`;
            boxWrapper.appendChild(box);

            // increasing total price
            let tPrice= parseInt(document.getElementById('totalPrice').innerText);
            tPrice= tPrice+550;
            document.getElementById('totalPrice').innerText=tPrice;
            //Grand total increase
            let grand= parseInt(document.getElementById('grandTotal').innerText);
            grand= tPrice;
            document.getElementById('grandTotal').innerText= grand;
            // coupon
            if(parseInt(document.getElementById('seatSelected').innerText) === 4){
                let inp= document.getElementById('couponInp');
                inp.removeAttribute('disabled');
                let btn= document.getElementById('couponBtn');
                btn.removeAttribute('disabled');


            }
            
            
            
        }


        


    }
    

    

}
//coupon check
function checkCoupon(){
    let inp= document.getElementById('couponInp');
    // let btn= document.getElementById('couponBtn');
    if(inp.value === 'NEW15'){
        console.log('hi')
        document.getElementById('couponContainer').classList.add('hidden')
        let grand= parseInt(document.getElementById('grandTotal').innerText);
        grand= (grand*85)/100;
        document.getElementById('grandTotal').innerText= grand;
    
    }
    else if(inp.value ==='Couple 20'){
        document.getElementById('couponContainer').classList.add('hidden')
        let grand= parseInt(document.getElementById('grandTotal').innerText);
        grand= (grand*80)/100;
        document.getElementById('grandTotal').innerText= grand;
    }
}

//check numder of seats
function totalSeats(){
    let seats= parseInt(document.getElementById('seatSelected').innerText);
    if(seats===4){
        return true;
    }
    else{
        return false;
    }
}

//next button
function enableNext(){
    let name= document.getElementById('nameInp').value;
    let phn= document.getElementById('phnInp').value;
    if(name.length>0 && phn.length>0){
        if(document.getElementById('nextBtn').hasAttribute('disabled')){
            document.getElementById('nextBtn').removeAttribute('disabled');
        }
    }
    
    else{
        if(!document.getElementById('nextBtn').hasAttribute('disabled')){
            document.getElementById('nextBtn').setAttribute('disabled');
        }
        
    }
}