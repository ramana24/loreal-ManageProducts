sap.ui.define([], function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
        },

        onFractionValue:function(oValue){
                if(oValue){

                    return parseFloat(oValue);
                }else {

                    return oValue;
                }
        },
        
        StatusCheck:function(ovalue){
            if(ovalue !== null){

                    if(ovalue==='G'){
                    return 'Success';
                    }
                    else if(ovalue === 'KG'){

                        return 'Error';
                    } else {
                        return 'None'
                    }
                

                }

                return 'Information';
        },

	};

});