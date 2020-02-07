import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre'
import { LibraryAPIService } from '../library-api.service'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public listeDePagesCourante:any = [];
  public form: FormGroup;
  public pageList: FormArray;

  library: Livre[];
  
  get listeFormGroup() {
    return this.form.get('pages') as FormArray;
  }

  constructor(private fb: FormBuilder, private livreService: LibraryAPIService) {


  }

  ngOnInit() {
    this.form = this.fb.group({
      pages: this.fb.array([this.createPage()])
    });

    this.pageList = this.form.get('pages') as FormArray;
    this.listeLivres()

  }

  addPage() {
    this.pageList.push(this.createPage());
  }


  // remove contact from group
  removePage(index) {
    this.pageList.removeAt(index);
  }


  get pageFormGroup() {
    let pageFormGroup = this.form.get('pages') as FormArray
    
   // console.log(pageFormGroup.controls)
    return this.form.get('pages') as FormArray;
  }


  createPage(): FormGroup {
    return this.fb.group({
      pages: [null]
    });
  }





  // Submit pour ajouter une page
  submit() {
    alert("Les pages ont bien été ajoutés")
    //this.pageFormGroup.controls
    this.listeDePagesCourante = []
    //Map ne marche pas
    this.form.value.pages.map((page) => {
      this.listeDePagesCourante.push(page.pages)
    }
    )
   
  }


  listeLivres() {
    this.livreService.getLivres().subscribe(
      (resultat) => {
        console.log(resultat)
        
          let livres =resultat
    
          this.library = resultat.livres
  
        
      })
  }
  supprime(numero: number) {
    this.livreService.deleteLivre(numero).subscribe(
      (resultat) => {
        console.log(resultat)
        this.listeLivres()
      })
  }
  ajoute(numero: number, titre: string) {
    console.log("ajouter")
    //console.log(this.listeDePagesCourante)
    this.livreService.addLivre(numero, titre, this.listeDePagesCourante ).subscribe(
      resultat => {
        this.listeLivres()
      })
  }

}