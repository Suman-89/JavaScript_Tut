        function off()
        {

            //number button//


            document.getElementById('n1').disabled=true;
            document.getElementById('n2').disabled=true;
            document.getElementById('ans').disabled=true;


            // number button //


            document.getElementById('1').disabled=true;
            document.getElementById('2').disabled=true;
            document.getElementById('3').disabled=true;
            document.getElementById('4').disabled=true;
            document.getElementById('5').disabled=true;
            document.getElementById('6').disabled=true;
            document.getElementById('7').disabled=true;
            document.getElementById('8').disabled=true;
            document.getElementById('9').disabled=true;

            //operator button//

            document.getElementById('+').disabled=true;
            document.getElementById('-').disabled=true;
            document.getElementById('*').disabled=true;
            document.getElementById('/').disabled=true;
            document.getElementById('%').disabled=true;

            // off button //

            document.getElementById('off').disabled=true;
        }
        function on()
        {
             //number button//


             document.getElementById('n1').disabled=false;
            document.getElementById('n2').disabled=false;
            document.getElementById('ans').disabled=false;


            // number button //


            document.getElementById('1').disabled=false;
            document.getElementById('2').disabled=false;
            document.getElementById('3').disabled=false;
            document.getElementById('4').disabled=false;
            document.getElementById('5').disabled=false;
            document.getElementById('6').disabled=false;
            document.getElementById('7').disabled=false;
            document.getElementById('8').disabled=false;
            document.getElementById('9').disabled=false;

            //operator button//

            document.getElementById('+').disabled=false;
            document.getElementById('-').disabled=false;
            document.getElementById('*').disabled=false;
            document.getElementById('/').disabled=false;
            document.getElementById('%').disabled=false;

            // off button //

            document.getElementById('off').disabled=false;
        }

            // function logic //

        function o1()
        {
            document.getElementById('n1').value=1;
        }
        function t2()
        {
            document.getElementById('n1').value=2;
        }
        function t3()
        {
            document.getElementById('n1').value=3;
        }
        function f4()
        {
            document.getElementById('n1').value=4;
        }
        function f5()
        {
            document.getElementById('n1').value=5;
        }
        function s6()
        {
            document.getElementById('n1').value=6;
        }
        function s7()
        {
            document.getElementById('n1').value=7;
        }
        function e8()
        {
            document.getElementById('n1').value=8;
        }
        function n9()
        {
            document.getElementById('n1').value=9;
        }

    // code for addition //
        
        function sum()
        {
            // var x = document.getElementById('n1').value;
            // console.log('pravat',typeof x);
            var a = parseInt(document.getElementById('n1').value);
            // console.log('t',typeof a, a);
            var b = parseInt(document.getElementById('n2').value);
            var c = a+b;
            parseInt(document.getElementById('ans').value=c);
            
        }
        // sum();
        // code for substraction
        function substraction()
        {
            var a = parseInt(document.getElementById('n1').value);
            var b = parseInt(document.getElementById('n2').value);
            var c = a-b;
            parseInt(document.getElementById('ans').value=c);  
        }
        // code for multiplication
        function multiplication()
        {
            var a = parseInt(document.getElementById('n1').value);
            var b = parseInt(document.getElementById('n2').value);
            var c = a*b;
            parseInt(document.getElementById('ans').value=c);    
        }
        // code for division
        function division()
        {
            var a = parseInt(document.getElementById('n1').value);
            var b = parseInt(document.getElementById('n2').value);
            var c = a/b;
            parseInt(document.getElementById('ans').value=c);    
        }
        // code for modulus
        function modulus()
        {
            var a = parseInt(document.getElementById('n1').value);
            var b = parseInt(document.getElementById('n2').value);
            var c = a%b;
            parseInt(document.getElementById('ans').value=c);    
        }
        


      