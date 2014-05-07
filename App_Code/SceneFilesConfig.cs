using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class Vector3 {
    private int m_x;
    private int m_y;
    private int m_z;

    public Vector3(int x, int y, int z)
    {
        m_x = x;
        m_y = y;
        m_z = z;
    }

    public Vector3(Vector3 vec)
    {
        m_x = vec.x;
        m_y = vec.y;
        m_z = vec.z;
    }

    public int x 
    {
        get { return m_x; }
        set { m_x = value; }
    }
    
    public int y
    {
        get { return m_y; }
        set { m_y = value; }
    }

    public int z
    {
        get { return m_z; }
        set { m_z = value; }
    }
}

//File With Position
public class Vector3File:  Vector3
{
  public Vector3File(int x, int y, int z, string fileName): base(x, y, z)
  {
      this.fileName = fileName;
  }
  public Vector3File(Vector3 vec, string fileName): base(vec)
  {
      this.fileName = fileName;
  }
  public string fileName;
}

/// <summary>
///SceneFilesConfig 用于存储模型名称和模型的布局信息。利用Newtonsoft.Jason.dll生成Jason
///在页面解析成Json对象去配置RoomContainer
/// </summary>
public class SceneFilesConfig
{
    public SceneFilesConfig(Vector3 ARange)
	{
        files = new Vector3[ARange.x, ARange.y, ARange.z] ;
        startPos = new Vector3(0, 0, 0);
	}

    public Vector3 startPos;
    public Vector3[,,] files;

}