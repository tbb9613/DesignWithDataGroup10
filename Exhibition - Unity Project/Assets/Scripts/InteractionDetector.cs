using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InteractionDetector : MonoBehaviour
{
    //public GameObject camera;
    //public GameObject lockCamera;
    //public static bool isCameraActive;
    public GameObject table;
    public GameObject monitorFrontOff;
    public GameObject monitorFrontOn;
    public GameObject monitorBackOff;
    public GameObject monitorBackOn;
    public GameObject morseLight;

    // Start is called before the first frame update
    void Start()
    {
        //isCameraActive = true;
        //GameObject camera = GameObject.Find("Main Camera");
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        //if (Input.GetMouseButtonDown(0)) //点击左键时
        if (Input.GetKeyDown("1"))
        {
            monitorFrontOff.SetActive(false);
            monitorFrontOn.SetActive(true);
        }
        if (Input.GetKeyDown("2"))
        {
            monitorFrontOn.SetActive(false);
            monitorFrontOff.SetActive(true);
        }
        if (Input.GetKeyDown("3"))
        {
            table.GetComponent<Animator>().enabled = true;
        }
        if (Input.GetKeyDown("4"))
        {
            monitorBackOff.SetActive(false);
            monitorBackOn.SetActive(true);
            morseLight.SetActive(true);
        }
        if (Input.GetKeyDown("5"))
        {
            monitorBackOn.SetActive(false);
            monitorBackOff.SetActive(true);
            morseLight.SetActive(false);
        }
        if (Input.GetKeyDown("6"))
        {
            table.GetComponent<Animator>().SetInteger("AnimState",1);
        }
        if (Input.GetKeyDown("7"))
        {
            monitorFrontOff.SetActive(false);
            monitorFrontOn.SetActive(true);
        }
    }
}
