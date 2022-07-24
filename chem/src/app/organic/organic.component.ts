import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-organic',
  templateUrl: './organic.component.html',
  styleUrls: ['./organic.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OrganicComponent {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'priority', 'prefix', 'suffix'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;
}

export interface PeriodicElement {
  name: string;
  filename: string;
  priority: number;
  suffix: string;
  prefix: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    priority: 1,
    filename: 'carboxyacid',
    name: 'Carboxylic Acid',
    suffix: '-oic acid, -carboxylic acid',
    prefix: 'carboxy-',
    description: `Neon is a chemical element with prefix Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    priority: 2,
    filename: 'ester',
    name: 'Ester',
    suffix: '-oate',
    prefix: '(R)-oxycarbonyl',
    description: `Neon is a chemical element with prefix Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    priority: 3,
    filename: 'amide',
    name: 'Amide',
    suffix: '-amide, -carboxamide',
    prefix: 'carbamoyl-',
    description: `Neon is a chemical element with prefix Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    priority: 4,
    filename: 'aldehyde',
    name: 'Aldehyde',
    suffix: '-al, -carbaldehyde',
    prefix: 'formyl-',
    description: `Fluorine is a chemical element with prefix F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    priority: 5,
    filename: 'ketone',
    name: 'Ketone',
    suffix: '-one',
    prefix: 'oxo-',
    description: `Neon is a chemical element with prefix Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    priority: 6,
    filename: 'alcohol',
    name: 'Alcohol',
    suffix: '-ol',
    prefix: 'hydroxy-',
    description: `Boron is a chemical element with prefix B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },

  {
    priority: 7,
    filename: 'thiol',
    name: 'Thiol',
    suffix: '-thiol',
    prefix: 'mercapto-',
    description: `Oxygen is a chemical element with prefix O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    priority: 8,
    filename: 'amine',
    name: 'Amine',
    suffix: '-amine',
    prefix: 'amino-',
    description: `Beryllium is a chemical element with prefix Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    priority: 9,
    filename: 'alkene',
    name: 'Alkene',
    suffix: '-ene',
    prefix: 'alkenyl',
    description: `Helium is a chemical element with prefix He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    priority: 10,
    filename: 'alkyne',
    name: 'Alkyne',
    suffix: '-yne',
    prefix: 'alkynyl',
    description: `Lithium is a chemical element with prefix Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    priority: 11,
    filename: 'alkane',
    name: 'Alkane',
    suffix: '-ane',
    prefix: 'alkyl',
    description: `Hydrogen is a chemical element with prefix H and atomic number 1. With a standard
        atomic suffix of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    priority: 12,
    filename: 'ether',
    name: 'Ether',
    suffix: '-ane',
    prefix: 'alkoxy',
    description: `Carbon is a chemical element with prefix C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    priority: 13,
    filename: 'alkylhalide',
    name: 'Alkyl Halide',
    suffix: '-ane',
    prefix: 'halo-',
    description: `Alkyl halides, or haloalkanes, are compounds where an alkane is connected to Fluorine, Chlorine, Bromine, or Iodine. Alkyl Halides have strong dipole-dipole interactions: so high boiling points. Boiling point and strength of interactions increases as the number of carbons increases.`,
  }
]