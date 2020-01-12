import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipesService } from '../../services/recipes.service';
//import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})

// export class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }

export class AddRecipeComponent implements OnInit {

  public recipeDetail = <Recipe>{};
  //selectedFile: ImageSnippet;

  //constructor( private activatedRoute: ActivatedRoute, private router: Router, private recipesService: RecipesService, private imageService: ImageService) { }
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipeDetail['id'] = 0;
  }

  onRecipeSubmitForm(form) {
    console.log(form);
    if(form.valid) {
        this.recipesService.addRecipe(this.recipeDetail);
        this.router.navigate(['/index']);
    }
  }
  onClickCancel() {
    this.router.navigate(['/index']);
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
        
  //       },
  //       (err) => {
        
  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }

}
