 

    function submitCheckout() {
        if (validateFields()) {
            alert("Thank you for shopping with us");
    
            // Reset the checkout form
            checkoutForm = JSON.parse(JSON.stringify(initialCheckoutForm));
    
            // Clear the form fields
            document.getElementById('taskForm').reset();
    
            // Render empty cart and reset total
            renderCarts();
            renderTotalSum();
        }
    }
    function renderCarts() {
        let cartHtml = '';
        var cartDiv = document.getElementById('boxList');
    
        checkoutForm.cart_details.forEach((x) => {
            var priceBox = x.discounted_price < x.price ? `<div class='actual-price'>
                        <span class='discount-price'> `+ x.price + `</span>
                       ${x.discounted_price}
                    </div>` : `<div class='actual-price'>
                        ${x.price}
                    </div>` ;
    
    
            cartHtml += `<div class="box" style="background-color: sandybrown;">
                    <div style="padding-left:10px; border-radius: 50%; padding-right: 10px; display:flex; justify-content: space-between; align-items: center;">
                        <p>${x.name}</p>
                       ${priceBox}
                        <div>
                            Quantity ${x.quantity}
                        </div>
                        <div>
                            <button onclick="removeItemCart(`+ x.id + `)">
                                X
                            </button>
                        </div>
                    </div>
                </div>`;
        });
    
        // Handle the case when the cart is empty
        if (checkoutForm.cart_details.length === 0) {
            cartHtml = '<p>Your cart is empty</p>';
        }
    
        cartDiv.innerHTML = cartHtml;
    }
    
    function renderTotalSum() {
        const totalSum = calculateTotalSum();
        document.getElementById('total-sum').textContent = totalSum.toFixed(2);
    }

    
    <div id='cartTotal' style="margin-top: 10px;">Total: <span id="total-sum"></span></div>
