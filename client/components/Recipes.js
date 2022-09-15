import React, { Component } from 'react';
import axios from 'axios';

class Recipes extends Component {
    async fetch() {
        axios.get('www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552', (req, res, next) => {
            try {
                console.log(res.data)
            }
            catch(ex){
                next(ex);
            }
        })
    }

    render() {
        const { fetch } = this;
        return(
            <div>
                { fetch }
            </div>
        )
    }
}

export default Recipes