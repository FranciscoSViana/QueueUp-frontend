package com.example.queueup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class Cadastro_Restaurante : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro__restaurante)
    }

    fun registerUser(v: View) {
        val register = Intent(this, MainActivity::class.java)
        startActivity(register)
    }
}
