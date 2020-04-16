package com.example.queueup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

 class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    fun irTelaMaps(v: View){
        val tlMaps = Intent(this, MapsActivity::class.java)
        startActivity(tlMaps)
    }
}
