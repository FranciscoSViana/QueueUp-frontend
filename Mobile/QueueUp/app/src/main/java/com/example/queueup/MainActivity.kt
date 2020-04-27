package com.example.queueup

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import androidx.appcompat.app.AlertDialog
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    var preferencias: SharedPreferences? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

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


        //button click to show modal
        btnCadastrar.setOnClickListener() {
            val mDialogView = LayoutInflater.from(this).inflate(R.layout.modal_cadastro, null);
            val mBuilder = AlertDialog.Builder(this)
                    .setView(mDialogView)
            //show dialog
            val mAlertDialog = mBuilder.show()
            //close modal
            val close: ImageView = mDialogView.findViewById(R.id.imgExit)
            close.setOnClickListener {
                mAlertDialog.dismiss()
            }
        }
    }

    //Funções de login e reset de senha
    fun loginUser(v: View) {
        val login = Intent(this, MainActivity::class.java)
        startActivity(login)
    }

    /* fun resetUser(v: View) {
         val reset = Intent(this, ResetActivity::class.java)
         startActivity(reset)
     } */

    /* fun irTelaMaps(v: View){
     val tlMaps = Intent(this, MapsActivity::class.java)
     startActivity(tlMaps)
     } */

    //test functionality
    fun irTelaRestaurante(v: View) {
        val telaRestaurante = Intent(this, MainRestaurante::class.java)
        startActivity(telaRestaurante)
    }

    fun irCadastroUsuario(v: View) {
        val cadastrousuario = Intent(this, Cadastro_usuario::class.java)
        startActivity(cadastrousuario)
    }

    fun irCadastroRestaurante(v: View) {
        val cadastrorestaurante = Intent(this, Cadastro_Restaurante::class.java)
        startActivity(cadastrorestaurante)
    }

}
