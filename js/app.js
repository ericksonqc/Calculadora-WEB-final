var calculadora={

	num1:"",
	num2: "",
	signo: "",

	agregarNumero: function(num){ 
		var pantalla = $("#display").html();
		if (pantalla==null || pantalla=="0") {
			$("#display").html(num);	
		}else{
			$("#display").html(pantalla+num); 
		}
		
	},
	operarSigno: function(signo){
		var pantalla = $("#display").html();
		this.num1 = pantalla;
		this.signo = signo;
		$("#display").html("0"); 
	}, 
	igual: function(){
		var pantalla = $("#display").html();
		this.num2 = pantalla;
		$("#display").html(eval(this.num1+this.signo+this.num2)); 
		this.num1 = "";
		this.num2 = "";
		this.signo = "";		
	},
	limpiar: function(){ 
		$("#display").html("0"); 
		this.num1 = "";
		this.num2 = "";
		this.signo = "";
	},
	colocarPunto: function(){ // 
		var pantalla=$("#display").html();
		if (pantalla.indexOf(".")==-1) {
			$("#display").html(pantalla+".")
		}
	},
	iniciar: function(){ 
		$(".tecla").click(function(){ 
			var alt=$(this).attr('alt'); 
			switch(alt){ 
			case "+": calculadora.operarSigno(alt); break; 
			case "-": calculadora.operarSigno(alt); break;
			case "*": calculadora.operarSigno(alt); break; 
			case "/": calculadora.operarSigno(alt); break;
			case ".": calculadora.colocarPunto(); break; 
			case "CE": calculadora.limpiar(); break;
			case "signo": console.log("Esto falta"); break;
			case "raiz": console.log(alt); break;
			case "igual": calculadora.igual();break;
			default: calculadora.agregarNumero(alt); break;
			}
		});
	}
}

calculadora.iniciar(); 
