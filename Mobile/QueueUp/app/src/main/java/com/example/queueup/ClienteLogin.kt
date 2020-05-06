package com.example.queueup

import feign.Feign
import feign.gson.GsonDecoder
import feign.gson.GsonEncoder

object ClienteLogin {

    fun logar():LoginRequests {
        return Feign.builder()
                .decoder(GsonDecoder())
                .encoder(GsonEncoder())
                .target(LoginRequests::class.java, "queueup-backend-2-1910136722.us-east-1.elb.amazonaws.com")
    }
}