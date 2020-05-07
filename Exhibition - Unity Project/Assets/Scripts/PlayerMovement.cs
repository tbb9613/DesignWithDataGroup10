using UnityEngine;
using System.Collections;
using System.Collections.Concurrent;
//using System.Collections.Generic;
using System.Linq;

public class PlayerMovement : MonoBehaviour
{
    //Public Player Controller;

    void Update()
    {
        //WASD控制前后左右
        //鼠标右键按住转向
        //鼠标左键单击拾取、交互

        /// <summary>
        /// 玩家移动
        /// </summary>
        //if (GamePause.IsGamePaused == false && InputDetector.isCameraActive == true)
        float k_x = Input.GetAxisRaw("Horizontal");
        float k_y = Input.GetAxisRaw("Vertical");
        //Debug.Log(k_x);
        bool mouse_click = Input.GetMouseButtonDown(0);
        float m_x = Input.GetAxis("Mouse X");
        float m_v = Input.GetAxis("Mouse Y");
        bool space = Input.GetKey(KeyCode.Space);
        MoveAndRotate(m_x, k_y, k_x, space, m_v);
    }

    public void MoveAndRotate(float m_x, float k_y, float k_x, bool jump, float m_v)
    {
        Vector3 moveDirection = Vector3.zero;
        //控制前后移动
        if (k_y > 0) moveDirection = transform.forward;
        else if (k_y < 0) moveDirection = -transform.forward;
        //控制左右移动
        if (k_x > 0) moveDirection += transform.right;
        else if (k_x < 0) moveDirection += -transform.right;
        //使其斜向移动时也匀速移动
        moveDirection.Normalize();
        //移动
        GetComponent<CharacterController>().Move(moveDirection * Consts.MoveSpeed * Time.fixedDeltaTime);
        //使用SimpleMove自带重力模拟重力
        GetComponent<CharacterController>().SimpleMove(Vector3.zero);
        //按住右键控制视角转向
        if (Input.GetMouseButton(1))
        {
            transform.Rotate(Vector3.up * m_x * Consts.RotateSpeed * Time.fixedDeltaTime);
            transform.GetChild(0).Rotate(Vector3.left * m_v * Consts.UpDownRotateSpeed * Time.fixedDeltaTime);
        }
    }
}