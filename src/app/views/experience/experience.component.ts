import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  events: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.events = [
      {
        company: 'Dooloo',
        position: 'Apprentie développeur fullstack',
        date: '01/2021 - 07/2021',
        status: '',
        description:
          "Maintenance et développement du site dooloo.fr\n" +
          "Site web en Symfony, avec une base de donnée MySQL\n" +
          "Tests front-end réalisés avec Cypress"
      },
      {
        company: 'Carrefour',
        position: 'Équipier de vente',
        date: '06/2019 - 07/2019',
        status: '',
        description:
          "CDD d'un mois chez Carrefour\n" +
          "Rangement des articles en rayon, en contact avec les clients\n" +
          "Première experience professionnelle"
      },
      {
        company: 'Promocours',
        position: 'Professeur particulier',
        date: '2018',
        status: '',
        description:
          "Cours particuliers de mathématiques à des élèves de collège/lycée durant toute l'année scolaire\n"
      },
    ]
  }

}
