package com.example.queueup

import feign.Feign
import feign.gson.GsonDecoder
import feign.gson.GsonEncoder

object ClienteLogin {

    fun logar():LoginRequests {
        return Feign.builder()
                .decoder(GsonDecoder())
                .encoder(GsonEncoder())
                .target(LoginRequests::class.java, "")
    }
}