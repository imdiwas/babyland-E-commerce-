import fire from '../../../../config/fire';

export const ORDER_START = "ORDER_START";
export const ORDER_FAIL = "ORDER_FAIL";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_UPDATE = "ORDER_UPDATE";


export const orderStart = () => {
    return {
        type: ORDER_START
    }
}

export const orderFail = (error) => {
    return {
        type: ORDER_FAIL,
        error:error
    }
}

export const orderSuccess = (data) => {
    return {
        type: ORDER_START,
        data:data
    }
}

export const fetchOrder = () => {
    return (dispatch) => {
        try {
            dispatch(orderStart());
            const userId = localStorage.getItem('userID');
            const orderData = [];
            fire.database().ref(`/Order/${userId}`).once("value", (snapshort) => {
                const data = snapshort.val();
                //abstract keys from an object
                // const DataArray = Object.assign([],data);
                if (snapshort.val() !== null) {
                    const keys = Object.keys(data);
                    // console.log("p",keys.length/ === .length)
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        const dataCollection = {
                            name: data[k].name,
                            description: data[k].description,
                            value: data[k].value,
                            img: data[k].img,
                            id: data[k].id,
                            postId: data[k].postId,
                            quantity: data[k].quantity
                        }
                        orderData.push(dataCollection);
                    }
                    dispatch(orderSuccess(orderData));

                }

            })

        }catch(error) {
            dispatch(orderFail(error))
        }
    }
}

export const orderUpdateData = (order) => {
    return {
        type: ORDER_UPDATE,
        order:order
    }
}