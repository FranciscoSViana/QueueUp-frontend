package com.example.queueup

import feign.Param
import feign.RequestLine

interface LoginRequests {

    @RequestLine("GET/{login}")
    fun getLogin(@Param("login")login:String):Login
}