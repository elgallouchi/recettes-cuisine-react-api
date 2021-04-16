//I_Importation

//a_of module
import React, { Component } from 'react';
import axios from 'axios';
//b_of component
import './RecipeCategories.css';


//II_Creation of the object: index
export default class Index extends Component {

    //a_Object element
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            firstData: {},
            secondData: {},
            
        }

        // console.log(this.props);
        
    }
    //b_Object properties/fonctionalities

    /*retreiving data from a food Api*/
    getCategories = async () => {

        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

            const elements = response.data.categories;
            const firstEl = response.data.categories[0];
            const secondEl = response.data.categories[1];
           

            /*Passing data to object element*/          
            this.setState({
                data: elements,
                firstData: firstEl, 
                secondData: secondEl, 
            })

            console.log(this.state.firstData.strCategory);

        } catch (error) {

            console.error('error:', error);
        }
    };
    //calling data retreival()
    componentDidMount() {//(?)
        this.getCategories()
    }
    
    render() {
        return (
            <div class='flex'>                                
                        <div>
                            <a href={'/category/'+ this.state.secondData.strCategory}><h4 class='categoriesTitles'>Recipes With {this.state.firstData.strCategory}</h4> </a>                     
                            <a href={'/category/'+ this.state.firstData.strCategory}><img src={this.state.firstData.strCategoryThumb} class='categoriesPictures' /></a>
                        </div>

                        <div>
                            <a href={'/category/'+ this.state.secondData.strCategory}><h4 class='categoriesTitles'>Receipes with {this.state.secondData.strCategory}</h4> </a>                     
                            <a href={'/category/'+ this.state.secondData.strCategory}><img src={this.state.secondData.strCategoryThumb} class='categoriesPictures' /></a>
                        </div>                
            </div>
        )
    }
}
