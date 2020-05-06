package com.example.queueup

import feign.Param
import feign.RequestLine

interface LoginRequests {

    @RequestLine("POST/login")
    fun getLogin(@Param("login") login: String): Login
    // @Headers("Content-Type: application/json") // json curly braces must be escaped!
    //@Body("%7B\"cpf\": \"{cpf}\", \"senha\": \"{senha}\"%7D")
    //fun json(@Param("cpf") cpf: String?, @Param("senha") senha: String?)

}