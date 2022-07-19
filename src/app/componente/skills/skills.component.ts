import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mostrarVentanaSkills:boolean;

  skills: { tecnologia: string, valor: number }[] = [
    { tecnologia: "Java SE", valor: 90 },
    { tecnologia: "Angular", valor: 70 },
    { tecnologia: "MySql", valor: 70 },
    { tecnologia: "Vertx", valor: 50 },
    { tecnologia: "JSF", valor: 55 },
    { tecnologia: "Otro", valor: 60 }
  ];

  constructor() { 
    this.mostrarVentanaSkills = false;
  }

  ngOnInit(): void {
  }

  cerrarVentana(){
    console.log("cerrar");
    this.mostrarVentanaSkills = false;
  }

  abrirVentana(){
    this.mostrarVentanaSkills = true;
  }

}
