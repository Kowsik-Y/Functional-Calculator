let outputvalue = document.getElementById("outputvalue")
        
        function display(num){
            outputvalue.value += num;
        }
        function Calculate(){
            try{
                outputvalue.value = eval(outputvalue.value);
            }
            catch(err)
            {
                alert("INVALID");
            }
        }
        function Clear(){
            outputvalue.value = "";
        }
        function dele(){
            outputvalue.value = outputvalue.value.slice(0,-1);
         }
