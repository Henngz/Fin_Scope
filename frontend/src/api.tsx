import axios from "axios";
import {CompanySearch,CompanyProfile, CompanyKeyMetrics, CompanyIncomeStatement, CompanyBalanceSheet, CompanyCashFlow, CompanyTenK} from "./company";

interface SearchReponse{
    data:CompanySearch[];
}

export const searchCompanies = async (query: string) =>{
    try
    {
        const data = await axios.get<SearchReponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        
        return data;
    }
    catch(error)
    {
        if(axios.isAxiosError(error))
        {
            console.log("error message: ", error.message);
            return error.message;
        }
        else
        {
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
};

export const getCompanyProfile = async (query: string) =>{
    try{
        const response = await axios.get<CompanyProfile[]>(
        `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            throw new Error(error.message);
        }else{
            console.log("unexpected error: ", error);
            throw new Error("An unexpected error has occured.");
        }
    }
}

export const getKeyMetrics= async (query: string) =>{
    try{
        const response = await axios.get<CompanyKeyMetrics[]>(
        `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            throw new Error(error.message);
        }else{
            console.log("unexpected error: ", error);
            throw new Error("An unexpected error has occured.");
        }
    }
}


export const getIncomeStatement = async (query: string) =>{
    try{
        const response = await axios.get<CompanyIncomeStatement[]>(
        `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            throw new Error(error.message);
        }else{
            console.log("unexpected error: ", error);
            throw new Error("An unexpected error has occured.");
        }
    }
}

export const getBalanceSheet = async (query: string) =>{
    try{
        const response = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`    
    );
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            throw new Error(error.message);
        }else{
            console.log("unexpected error: ", error);
            throw new Error("An unexpected error has occured.");
        }
    }
}

export const getCashFlowStatement = async (query: string) =>{
    try{
        const response = await axios.get<CompanyCashFlow[]>(
        `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`    
    );
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            throw new Error(error.message);
        }else{
            console.log("unexpected error: ", error);
            throw new Error("An unexpected error has occured.");
        }
    }
}

export const getTenK = async (query: string) =>{
    try{
        const response = await axios.get<CompanyTenK[]>(
        `https://financialmodelingprep.com/stable/sec-filings-company-search/symbol?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            console.log("error message: ", error.message);
            throw new Error(error.message);
        }else{
            console.log("unexpected error: ", error);
            throw new Error("An unexpected error has occured.");
        }
    }
}