import React from 'react';


const Filter = () => {
    return (
        <div>
            <div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Search by Song Title</label>
                    </div>
                    <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        
                    </span>
                    </div>
                </div>
            </div>
            <div>
            <div class="row g-3 align-items-center">
                    <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Search by Artist</label>
                    </div>
                    <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        
                    </span>
                    </div>
                </div>
            </div>
            <div>
            <div class="row g-3 align-items-center">
                    <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Search by Album</label>
                    </div>
                    <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        
                    </span>
                    </div>
                </div>
            </div>
            <div>
            <div class="row g-3 align-items-center">
                    <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Search by Genre</label>
                    </div>
                    <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                    </div>
                    <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        
                    </span>
                    </div>
                </div>
            </div>
            
        </div>
      );
}
 
export default Filter;