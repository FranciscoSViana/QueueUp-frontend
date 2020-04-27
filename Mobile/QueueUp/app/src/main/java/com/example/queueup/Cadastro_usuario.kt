package com.example.queueup

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*

class Cadastro_usuario : AppCompatActivity() {

    var preferencias: SharedPreferences? = null


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_usuario)

        preferencias = getPreferences(Context.MODE_PRIVATE)

        etUsuario.setText(preferencias?.getString("loginUsuario", ""))

        fun salvarDados(v: View) {

            val editor = preferencias?.edit()

            editor?.putString("loginUsuario", etUsuario.text.toString())

            editor?.commit()
        }

        fun limparDados(v: View) {
            val editor = preferencias?.edit()

            editor?.clear()
            editor?.commit()
        }
    }

    fun registerUser(v: View) {
        val register = Intent(this, MainActivity::class.java)
        startActivity(register)

        val editor = preferencias?.edit()

        editor?.putString("loginUsuario", etUsuario.text.toString())

        editor?.commit()
    }
}
